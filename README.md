# thue-web — the Thue site

Landing, Privacy Policy and Terms of Use of **Thue** (iPhone puzzle game), in English, Russian and Ukrainian.
Live: **https://localtost.github.io/thue-web/** (repo renamed from `thue-privacy` on 27.10.2026; the old `/thue-privacy/` address no longer works).

| Page | en | ru | uk |
|---|---|---|---|
| Landing | `/thue-web/` | `/thue-web/ru/` | `/thue-web/uk/` |
| Privacy Policy | `/thue-web/privacy/` | `/thue-web/ru/privacy/` | `/thue-web/uk/privacy/` |
| Terms of Use | `/thue-web/terms/` | `/thue-web/ru/terms/` | `/thue-web/uk/terms/` |

App Store Connect: Privacy Policy URL = `https://localtost.github.io/thue-web/privacy/`, Marketing URL = `https://localtost.github.io/thue-web/`.

## Build

```bash
npm ci
npm run build                 # → dist/
python3 scripts/site_check.py # 0 FAIL required
npm run preview               # http://localhost:4321/thue-web/
```

Every push to `main` builds, checks and deploys with `.github/workflows/pages.yml` (Settings → Pages → Source: GitHub Actions).

## Where things are
- `src/i18n.ts` — languages, URLs, all UI strings (en/ru/uk, same keys), contact, **`APP_STORE_URL` / `APP_STORE_ID`**.
- `src/views/Landing.astro` — landing, variant B «Сумерки» (approved 27.10.2026; mockups in `docs/design/`).
- `src/views/Doc.astro` — Privacy / Terms template; texts in `src/content/{privacy,terms}/<lang>.md`.
- `public/` — icons, Apple's App Store badges (`badges/`, untouched artwork).
- Privacy text source of truth: Thue app repo `docs/privacy/privacy-policy.md` — change both together.

## When the app is published
Set `APP_STORE_URL` (the App Store link) and `APP_STORE_ID` (numeric id) in `src/i18n.ts`: the badge becomes a link and Safari shows the
Smart App Banner. Add Apple's official Ukrainian badge as `public/badges/app-store-uk.v1.svg` and point `BADGE.uk` to it.

Agents: see `CLAUDE.md` (`/web` → `web-developer`).
