import { useContext } from "react";
import { LocaleContext } from "../context/Locale.context";
import { ILocaleContext } from "../context/Locale.types";

export function useLocale(): ILocaleContext {
  const context = useContext(LocaleContext);

  if (!context)
    throw new Error("useLocale must be used within a LocaleContext");

  return context;
}
