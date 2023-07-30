export type Locale = string;

export interface ILocaleContext {
  locale: Locale;
  setLocale(lang: Locale): void;
}
