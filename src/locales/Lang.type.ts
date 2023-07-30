export const Lang = {
  br: {
    lang: "pt",
    country: "BR",
    locale: "pt-BR",
  },
  en: {
    lang: "en",
    country: "US",
    locale: "en-US",
  },
};

export const Locales = Object.values(Lang).map((lang) => lang.locale);
