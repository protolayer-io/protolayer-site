/**
 * Locale-aware path + link helpers.
 *
 * Routing model (static site, no server):
 *   - English (default) lives at the un-prefixed paths: `/` and `/choke`.
 *   - Spanish / Portuguese live under a locale prefix: `/es/`, `/pt/`,
 *     `/es/choke`, `/pt/choke`.
 */
import { defaultLang, langCodes, languages, type Lang } from './ui';

export { defaultLang, langCodes, languages };
export type { Lang };

type Page = 'home' | 'choke';

/** Build the path for a given page in a given locale. */
export function localizedPath(lang: Lang, page: Page): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  if (page === 'choke') return `${prefix}/choke`;
  return prefix === '' ? '/' : `${prefix}/`;
}

/** All locale variants of a page, keyed by lang — used by the switcher and hreflang tags. */
export function pageHrefs(page: Page): Record<Lang, string> {
  return langCodes.reduce(
    (acc, lang) => {
      acc[lang] = localizedPath(lang, page);
      return acc;
    },
    {} as Record<Lang, string>
  );
}
