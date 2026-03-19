import en from '../content/en.json';
import ptBr from '../content/pt-br.json';

export type Locale = 'en' | 'pt-br';

const translations: Record<Locale, typeof en> = {
  en,
  'pt-br': ptBr,
};

/**
 * Returns a typed translation object for the given locale.
 * Usage: const t = useTranslations('en'); t.hero.heading_line1
 */
export function useTranslations(locale: Locale) {
  return translations[locale];
}

/**
 * Returns the alternate locale for language switcher links.
 */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-br' : 'en';
}

/**
 * Returns the URL path prefix for a given locale.
 */
export function localePath(locale: Locale, path = ''): string {
  return `/${locale}${path}`;
}

export const LOCALES: Locale[] = ['en', 'pt-br'];
