// Languages, URLs and every visible string of the site chrome and the landing (en / ru / uk — same keys in each).
// Legal texts live in src/content/{privacy,terms}/<lang>.md.

export const LANGS = ['en', 'ru', 'uk'] as const;
export type Lang = (typeof LANGS)[number];
export type Kind = 'home' | 'privacy' | 'terms';

export const ORIGIN = 'https://localtost.github.io';
export const BASE = '/thue-web';
export const CONTACT = 'artem.kumskovmail@gmail.com';
export const DEVELOPER = 'Artem Kumskov';

/** App Store page of Thue. null until the app is published: the badge is shown with "Coming soon" and is not a link. */
export const APP_STORE_URL: string | null = 'https://apps.apple.com/app/id6827519651';
/** Numeric App Store id for <meta name="apple-itunes-app"> (Smart App Banner). null until published. */
export const APP_STORE_ID: string | null = '6827519651';

const KINDS: Record<Kind, string> = { home: '/', privacy: '/privacy/', terms: '/terms/' };
export const prefix = (l: Lang) => (l === 'en' ? '' : '/' + l);
/** Site-relative URL with the GitHub Pages base: /thue-web/ru/privacy/ */
export const url = (l: Lang, kind: Kind) => BASE + prefix(l) + KINDS[kind];
export const asset = (path: string) => BASE + '/' + path.replace(/^\//, '');

export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', ru: 'ru_RU', uk: 'uk_UA' };
export const LANG_LABEL: Record<Lang, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  ru: { short: 'RU', name: 'Русский' },
  uk: { short: 'UK', name: 'Українська' },
};
/** Apple's localized badge artwork; Ukrainian uses the English badge until the official uk file is added. */
export const BADGE: Record<Lang, string> = {
  en: 'badges/app-store-en.v1.svg',
  ru: 'badges/app-store-ru.v1.svg',
  uk: 'badges/app-store-en.v1.svg',
};

export const langPaths = () => LANGS.filter((l) => l !== 'en').map((l) => ({ params: { lang: l }, props: { lang: l } }));

const S = {
  en: {
    'site.title': 'Thue — a puzzle about rules for iPhone',
    'site.description': 'Thue is a puzzle game for iPhone: you don’t steer the hero, you edit the rules, and the path follows.',
    'site.tagline': 'Change the rule. The path follows.',
    'skip': 'Skip to content',
    'nav.lang': 'Language',
    'nav.home': 'Home',
    'nav.privacy': 'Privacy Policy',
    'nav.terms': 'Terms of Use',
    'nav.contact': 'Contact',
    'store.alt': 'Download on the App Store',
    'store.soon': 'Coming soon',
    'feat.1.title': 'A level is rules, not a map',
    'feat.1.text': 'The hero walks the unfold of the rules. You never steer.',
    'feat.2.title': 'One edit, many places',
    'feat.2.text': 'Change a symbol and the path changes everywhere the rule is used.',
    'feat.3.title': 'Six chapters, three difficulties',
    'feat.3.text': 'From one rule to recursion and two heroes at once.',
    'doc.kicker': 'Thue · Legal',
    'doc.toc': 'Contents',
    'doc.top': 'Back to top',
    'notfound.title': 'Page not found',
    'notfound.text': 'This path leads off the island.',
  },
  ru: {
    'site.title': 'Thue — головоломка о правилах для iPhone',
    'site.description': 'Thue — головоломка для iPhone: героя не ведёшь, правишь правила — и путь меняется следом.',
    'site.tagline': 'Измени правило — путь последует.',
    'skip': 'К содержанию',
    'nav.lang': 'Язык',
    'nav.home': 'Главная',
    'nav.privacy': 'Политика конфиденциальности',
    'nav.terms': 'Условия использования',
    'nav.contact': 'Связаться',
    'store.alt': 'Загрузите в App Store',
    'store.soon': 'Скоро',
    'feat.1.title': 'Уровень — это правила, не карта',
    'feat.1.text': 'Герой идёт по развёртке правил. Управлять им не нужно.',
    'feat.2.title': 'Одна правка — много мест',
    'feat.2.text': 'Изменишь символ — путь меняется везде, где стоит правило.',
    'feat.3.title': 'Шесть глав, три сложности',
    'feat.3.text': 'От одного правила до рекурсии и двух героев сразу.',
    'doc.kicker': 'Thue · Документы',
    'doc.toc': 'Содержание',
    'doc.top': 'Наверх',
    'notfound.title': 'Страница не найдена',
    'notfound.text': 'Этот путь уводит с острова.',
  },
  uk: {
    'site.title': 'Thue — головоломка про правила для iPhone',
    'site.description': 'Thue — головоломка для iPhone: героя не ведеш, правиш правила — і шлях змінюється слідом.',
    'site.tagline': 'Зміни правило — шлях піде слідом.',
    'skip': 'До змісту',
    'nav.lang': 'Мова',
    'nav.home': 'Головна',
    'nav.privacy': 'Політика конфіденційності',
    'nav.terms': 'Умови використання',
    'nav.contact': 'Зв’язатися',
    'store.alt': 'Завантажте в App Store',
    'store.soon': 'Незабаром',
    'feat.1.title': 'Рівень — це правила, не мапа',
    'feat.1.text': 'Герой іде розгорткою правил. Керувати ним не треба.',
    'feat.2.title': 'Одна правка — багато місць',
    'feat.2.text': 'Зміниш символ — шлях змінюється всюди, де стоїть правило.',
    'feat.3.title': 'Шість розділів, три складності',
    'feat.3.text': 'Від одного правила до рекурсії та двох героїв одразу.',
    'doc.kicker': 'Thue · Документи',
    'doc.toc': 'Зміст',
    'doc.top': 'Нагору',
    'notfound.title': 'Сторінку не знайдено',
    'notfound.text': 'Цей шлях веде з острова.',
  },
} as const;

export type Key = keyof (typeof S)['en'];
export function t(l: Lang, key: Key): string {
  const v = (S as Record<string, Record<string, string>>)[l]?.[key];
  if (typeof v !== 'string' || !v.trim()) throw new Error(`i18n: ${l}.${key} missing or empty`);
  return v;
}
export const STRINGS = S;
