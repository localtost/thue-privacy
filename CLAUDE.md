# thue-web — rules for Claude

Site of the iPhone game **Thue**: landing + Privacy Policy + Terms of Use, en / ru / uk, Astro → GitHub Pages
(https://localtost.github.io/thue-web/). The game itself lives in `/Users/artkai/Desktop/me/Thue` (repo `localtost/thue-ios`);
its design law is `Thue/docs/DESIGN_SYSTEM.md` (DS v3 «Диорама»), and the site uses the same tokens (`src/styles/site.css`).

- Answer the customer in Russian.
- Any site task → `/web` (agent `web-developer`, `.claude/agents/web-developer.md`). New or changed meaning in texts → write
  en/ru/uk together; legal meaning (privacy/terms) — ask the customer first.
- Design: only from the approved mockups in `docs/design/` (landing **b.html** «Сумерки», documents **doc.html**). New look → mockups
  first, customer approves, then code.
- Privacy text must match the app repo `docs/privacy/privacy-policy.md` — change both in one go.
- Before pushing: `npm run build && python3 scripts/site_check.py` → 0 FAIL. Push to `main` deploys automatically.
- Not allowed without the customer: third-party scripts / analytics / trackers / CDN fonts, new pages, URL changes, App Store id.
