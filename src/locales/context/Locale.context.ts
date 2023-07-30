import { createContext } from "react";
import { ILocaleContext } from "./Locale.types";

export const LocaleContext = createContext<ILocaleContext>(
  {} as ILocaleContext
);
