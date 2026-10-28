# Лендинг E «Кино» — impl-notes (28.10.2026)

Макет: `docs/design/e.html` (утверждён заказчиком 27.10.2026). Исследование: `docs/design/research-2026-10-27.md`.
Решение заказчика 28.10: бейдж App Store остаётся живой ссылкой и во время ревью.

## Файлы
- `src/views/Landing.astro` — полностью новый: первый экран с роликом (WebM → MP4, постер, `preload="metadata"`), кнопка паузы
  (inline-JS ~1 КБ, подпись меняется «пауза ↔ воспроизвести»), при `prefers-reduced-motion` автозапуска нет, показывается постер;
  схема «одна правка — много мест» (CSS-цикл 6 с, при reduced-motion — оба состояния сразу); 6 глав; 3 сложности; повтор бейджа.
  JSON-LD: `["VideoGame","MobileApplication"]`, `offers.price 0`, без рейтинга.
- `src/i18n.ts` — ключи `feat.*` удалены; добавлены `hero.*`, `video.*`, `og.alt`, `mech.*`, `demo.*`, `chap.*`, `diff.*`, `end.*` (en/ru/uk).
  Тексты — из стор-листинга (`Thue/docs/store/listing.md`) и каталога игры (имена глав и сложностей); новые фразы — подписи схемы, «Готов править правила?».
- `src/layouts/Base.astro` — `og:image` → `og.v1.jpg` 1200×630 (+ width/height/alt), `twitter:card` → `summary_large_image`.
- `public/media/kino.v1.webm` (119 КБ), `kino.v1.mp4` (164 КБ), `kino-poster.v1.jpg` (41 КБ) — из `Thue/Design/StoreHeader/header-3840x1646.mp4`, 1600 px, без звука.
- `public/og.v1.jpg` (50 КБ) — из `Thue/Design/StoreHeader/search-1920x1280.png`.
- `CLAUDE.md`, `.claude/agents/web-developer.md` — закон вида теперь `e.html`.

## Проверки
- `npm run build` → 10 страниц; `python3 scripts/site_check.py` → 9 pages, 0 FAIL, 0 WARN.
- Глазами (`astro preview`, headless Chrome): `/ru/` 1440 px, `/ru/` и `/uk/` 390 px — без горизонтального скролла, длинные uk-строки переносятся.
- Не проверено: Safari на iPhone (автозапуск, Smart App Banner), VoiceOver, Lighthouse/LCP на реальной сети, Tab-обход вручную.

## Assumptions
- На телефоне ролик кадрируется 2:1 (видны правило и остров), текст — под роликом.
- Постер — кадр 5 с (герой у выхода, путь подсвечен), чтобы при reduced-motion был смысловой кадр.
- В подвале по-прежнему «© 2026 Artem Kumskov» — не менял (вне задачи).
