#!/usr/bin/env python3
"""Thue site check (stdlib only). Run after `npm run build`: python3 scripts/site_check.py  → exit 1 on any FAIL.

Checks every page in dist/: required pages exist; <html lang>; one <h1>; title ≤ 60 and description ≤ 160 chars;
canonical + reciprocal hreflang (en/ru/uk + x-default); og tags; every internal link and asset resolves inside dist/;
no third-party requests (scripts, styles, fonts, images, iframes); strings in src/i18n.ts have the same keys in all languages;
privacy/terms markdown exists for every language with the same number of sections.
"""
import os, re, sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
BASE = '/thue-web'
ORIGIN = 'https://localtost.github.io'
LANGS = ['en', 'ru', 'uk']
KINDS = {'home': '', 'privacy': 'privacy/', 'terms': 'terms/'}
fails, warns = [], []


def fail(m): fails.append(m)
def warn(m): warns.append(m)


def page_url(lang, kind):
    return BASE + ('' if lang == 'en' else '/' + lang) + '/' + KINDS[kind]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = None; self.h1 = 0; self.title = ''; self._t = False
        self.meta = {}; self.links = []; self.refs = []; self.ids = set()

    def handle_starttag(self, tag, a):
        a = dict(a)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'h1': self.h1 += 1
        if tag == 'title': self._t = True
        if tag == 'meta': self.meta[a.get('name') or a.get('property')] = a.get('content') or ''
        if tag == 'link': self.links.append(a)
        for attr in ('href', 'src'):
            if a.get(attr) and tag in ('a', 'img', 'script', 'link', 'iframe', 'source', 'use'):
                self.refs.append((tag, a.get('rel'), a[attr]))

    def handle_endtag(self, tag):
        if tag == 'title': self._t = False

    def handle_data(self, d):
        if self._t: self.title += d


def parse(path):
    p = Page(); p.feed(open(path, encoding='utf-8').read()); return p


def local(path_url):
    """/thue-web/ru/privacy/#x → dist/ru/privacy/index.html"""
    u = path_url.split('#')[0].split('?')[0]
    if not u.startswith(BASE): return None
    rel = u[len(BASE):].lstrip('/')
    f = os.path.join(DIST, rel)
    return os.path.join(f, 'index.html') if (u.endswith('/') or os.path.isdir(f)) else f


if not os.path.isdir(DIST):
    print('FAIL dist/ missing — run `npm run build` first'); sys.exit(1)

pages = {}
for lang in LANGS:
    for kind in KINDS:
        f = local(page_url(lang, kind))
        if not os.path.isfile(f): fail(f'missing page {page_url(lang, kind)}'); continue
        pages[(lang, kind)] = parse(f)
if not os.path.isfile(os.path.join(DIST, '404.html')): fail('missing 404.html')
if not os.path.isfile(os.path.join(DIST, '.nojekyll')): warn('no .nojekyll in dist (fine with the Actions deploy)')

for (lang, kind), p in pages.items():
    where = page_url(lang, kind)
    if p.lang != lang: fail(f'{where}: <html lang={p.lang}> ≠ {lang}')
    if p.h1 != 1: fail(f'{where}: {p.h1} <h1>')
    if not p.title or len(p.title) > 60: fail(f'{where}: title length {len(p.title)} (1–60)')
    d = p.meta.get('description', '')
    if not d or len(d) > 160: fail(f'{where}: description length {len(d)} (1–160)')
    for k in ('og:title', 'og:description', 'og:image', 'og:url', 'og:locale'):
        if not p.meta.get(k): fail(f'{where}: no {k}')
    canon = [l['href'] for l in p.links if l.get('rel') == 'canonical']
    if canon != [ORIGIN + where]: fail(f'{where}: canonical {canon}')
    alts = {l.get('hreflang'): l['href'] for l in p.links if l.get('rel') == 'alternate'}
    want = {l: ORIGIN + page_url(l, kind) for l in LANGS} | {'x-default': ORIGIN + page_url('en', kind)}
    if alts != want: fail(f'{where}: hreflang {alts}')
    for tag, rel, ref in p.refs:
        if ref.startswith(('mailto:', 'tel:')): continue
        if ref.startswith('#'):
            if ref != '#' and ref[1:] not in p.ids and tag == 'a': fail(f'{where}: broken anchor {ref}')
            continue
        if ref.startswith('http'):
            if tag in ('script', 'img', 'iframe', 'source') or (tag == 'link' and rel in ('stylesheet', 'preload', 'icon', 'apple-touch-icon')):
                fail(f'{where}: third-party request {tag} {ref}')
            continue
        if ref.startswith('data:'): continue
        f = local(ref)
        if f is None: fail(f'{where}: link outside {BASE}: {ref}')
        elif not os.path.isfile(f): fail(f'{where}: broken link {ref}')

# i18n keys
src = open(os.path.join(ROOT, 'src', 'i18n.ts'), encoding='utf-8').read()
blocks = dict(re.findall(r"\n  (en|ru|uk): \{(.*?)\n  \}", src, re.S))
keys = {l: set(re.findall(r"'([a-z0-9.]+)':", blocks.get(l, ''))) for l in LANGS}
for l in LANGS[1:]:
    if keys[l] != keys['en']: fail(f'i18n: {l} keys differ from en: {sorted(keys[l] ^ keys["en"])}')

# legal markdown
for kind in ('privacy', 'terms'):
    counts = {}
    for l in LANGS:
        f = os.path.join(ROOT, 'src', 'content', kind, f'{l}.md')
        if not os.path.isfile(f): fail(f'missing src/content/{kind}/{l}.md'); continue
        counts[l] = len(re.findall(r'^## ', open(f, encoding='utf-8').read(), re.M))
    if len(set(counts.values())) > 1: fail(f'{kind}: section counts differ {counts}')

for w in warns: print('WARN', w)
for f in fails: print('FAIL', f)
print(f'site_check: {len(pages)} pages, {len(fails)} FAIL, {len(warns)} WARN')
sys.exit(1 if fails else 0)
