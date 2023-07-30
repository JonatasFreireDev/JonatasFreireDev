"use client";
import { useCallback, useState } from "react";

import { LocaleContext } from "./Locale.context";

import { BaseComponentWithoutClassName } from "@/components/ComponentBase.types";
import { Locale } from "./Locale.types";
import { Locales } from "../Lang.type";
import { Lang } from "../Lang.type";

interface ILocaleProvider extends BaseComponentWithoutClassName {
  lang: string;
}

export const LocaleProvider = ({ children, lang }: ILocaleProvider) => {
  const [locale, setLocaleState] = useState<Locale>(() =>
    Locales.includes(lang) ? lang : Lang.en.locale
  );

  const setLocale = useCallback(
    (lang: string) => setLocaleState(lang),
    [setLocaleState]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
