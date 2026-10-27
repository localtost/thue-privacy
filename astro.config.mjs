// Thue site (GitHub Pages: https://localtost.github.io/thue-web/). `npm run build` → dist/, deployed by .github/workflows/pages.yml.
// Static output, no client framework: CSS is inlined, the one script is a tiny inline language helper.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://localtost.github.io',
  base: '/thue-web',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uk'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  devToolbar: { enabled: false },
});
