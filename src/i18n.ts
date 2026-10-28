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
    'hero.genre': 'Logic puzzle',
    'hero.platform': 'iPhone',
    'hero.free': 'Free',
    'og.alt': 'The rule A = right, up, right, B above a floating island; the hero walks the lit path to the exit',
    'video.label': 'The rule A = right, up, right, B, and the hero walking it across a floating island to the exit',
    'video.pause': 'Pause video',
    'video.play': 'Play video',
    'mech.kicker': 'The idea',
    'mech.title': 'One edit, many places',
    'mech.text': 'You don’t steer the hero. A level is a start line and a few rules. Press Run, and the rules unfold into moves the hero walks. Change a symbol, and it changes everywhere the rule is used.',
    'demo.start': 'Start',
    'demo.rule': 'Rule',
    'demo.caption': 'One symbol, and the path changes in three places: rule A appears in the start three times.',
    'demo.map': 'Path diagram: before the edit the path climbs in shallow steps and misses the exit; after it, it climbs steeply straight to the exit.',
    'chap.kicker': '216 levels',
    'chap.title': 'Six chapters. A new idea in each',
    'chap.meta': 'Chapter {n} · 12 levels',
    'chap.1': 'One rule',
    'chap.2': 'Rule in a rule',
    'chap.3': 'Recursion',
    'chap.4': 'Two heroes',
    'chap.5': 'Many places',
    'chap.6': 'Wiring',
    'diff.kicker': 'Three difficulties, three sets of maps',
    'diff.title': 'Play your way',
    'diff.relaxed': 'Relaxed',
    'diff.relaxed.text': 'No edit limit, 3 hints.',
    'diff.normal': 'Normal',
    'diff.normal.text': 'An edit limit, 1 hint.',
    'diff.strict': 'Strict',
    'diff.strict.text': 'The fewest edits possible, no hints, a limited number of runs.',
    'end.title': 'Ready to edit the rules?',
    'end.text': 'Free · no account · plays offline',
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
    'hero.genre': 'Логическая головоломка',
    'hero.platform': 'iPhone',
    'hero.free': 'Бесплатно',
    'og.alt': 'Правило A = вправо, вверх, вправо, B над парящим островом; герой идёт по подсвеченному пути к выходу',
    'video.label': 'Правило A = вправо, вверх, вправо, B, и герой проходит по нему через парящий остров к выходу',
    'video.pause': 'Остановить видео',
    'video.play': 'Воспроизвести видео',
    'mech.kicker': 'В чём идея',
    'mech.title': 'Одна правка — много мест',
    'mech.text': 'Героя не ведёшь. Уровень — это старт и несколько правил. Нажми «Запустить» — правила развернутся в ходы, и герой пройдёт по ним. Меняешь символ — он меняется везде, где стоит правило.',
    'demo.start': 'Старт',
    'demo.rule': 'Правило',
    'demo.caption': 'Один символ — а путь меняется в трёх местах: правило A стоит в старте три раза.',
    'demo.map': 'Схема пути: до правки путь пологой лесенкой уходит мимо выхода, после правки круто поднимается прямо к выходу.',
    'chap.kicker': '216 уровней',
    'chap.title': 'Шесть глав. Новая идея в каждой',
    'chap.meta': 'Глава {n} · 12 уровней',
    'chap.1': 'Одно правило',
    'chap.2': 'Правило в правиле',
    'chap.3': 'Рекурсия',
    'chap.4': 'Два героя',
    'chap.5': 'Много мест',
    'chap.6': 'Проводка',
    'diff.kicker': 'Три сложности — три набора карт',
    'diff.title': 'Играй так, как тебе нравится',
    'diff.relaxed': 'Свободно',
    'diff.relaxed.text': 'Правок без лимита, 3 подсказки.',
    'diff.normal': 'Обычно',
    'diff.normal.text': 'Лимит правок, 1 подсказка.',
    'diff.strict': 'Строго',
    'diff.strict.text': 'Минимум правок, без подсказок, лимит запусков.',
    'end.title': 'Готов править правила?',
    'end.text': 'Бесплатно · без аккаунта · играется без сети',
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
    'hero.genre': 'Логічна головоломка',
    'hero.platform': 'iPhone',
    'hero.free': 'Безкоштовно',
    'og.alt': 'Правило A = вправо, вгору, вправо, B над островом у небі; герой іде підсвіченим шляхом до виходу',
    'video.label': 'Правило A = вправо, вгору, вправо, B, і герой проходить ним через острів у небі до виходу',
    'video.pause': 'Зупинити відео',
    'video.play': 'Відтворити відео',
    'mech.kicker': 'У чому ідея',
    'mech.title': 'Одна правка — багато місць',
    'mech.text': 'Героя не ведеш. Рівень — це старт і кілька правил. Натисни «Запустити» — правила розгорнуться в ходи, і герой пройде ними. Міняєш символ — він змінюється всюди, де стоїть правило.',
    'demo.start': 'Старт',
    'demo.rule': 'Правило',
    'demo.caption': 'Один символ — а шлях змінюється в трьох місцях: правило A стоїть у старті тричі.',
    'demo.map': 'Схема шляху: до правки шлях пологою драбинкою йде повз вихід, після правки круто піднімається просто до виходу.',
    'chap.kicker': '216 рівнів',
    'chap.title': 'Шість розділів. Нова ідея в кожному',
    'chap.meta': 'Розділ {n} · 12 рівнів',
    'chap.1': 'Одне правило',
    'chap.2': 'Правило в правилі',
    'chap.3': 'Рекурсія',
    'chap.4': 'Два герої',
    'chap.5': 'Багато місць',
    'chap.6': 'Проводка',
    'diff.kicker': 'Три складності — три набори мап',
    'diff.title': 'Грай так, як тобі подобається',
    'diff.relaxed': 'Вільно',
    'diff.relaxed.text': 'Правок без ліміту, 3 підказки.',
    'diff.normal': 'Звичайно',
    'diff.normal.text': 'Ліміт правок, 1 підказка.',
    'diff.strict': 'Суворо',
    'diff.strict.text': 'Мінімум правок, без підказок, ліміт запусків.',
    'end.title': 'Готовий правити правила?',
    'end.text': 'Безкоштовно · без акаунта · грається без мережі',
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
