---
description: Сайт Thue — Astro, лендинг/Privacy/Terms, перф, доступность, SEO (агент web-developer → impl-notes.md, site_check)
argument-hint: <что сделать на сайте>
---

Запусти сабагента `web-developer` (`.claude/agents/web-developer.md`) и передай ему задачу ниже.
Сам работу этапа не делай — поставь задачу, дождись результата и кратко перескажи его по-русски.
Создай `docs/features/<slug>/`, если папки ещё нет.

1. Новый вид — сначала макеты в `docs/design/` на approve заказчику, потом код.
2. Агент вернёт вопросы (URL, сторонние скрипты, App Store id, юридический смысл) — задай их заказчику до продолжения.
3. Гейт: `npm run build && python3 scripts/site_check.py` → 0 FAIL, глазами `/`, `/ru/privacy/`, `/uk/terms/` на 320 и 1280 px.
4. **Доставка (только ты):** коммит явных путей (не `git add -A`), push в `main` → GitHub Actions выкладывает сайт;
   через 1–2 минуты проверь https://localtost.github.io/thue-web/ и статус workflow (`gh run list -R localtost/thue-web`).

Задача: $ARGUMENTS
