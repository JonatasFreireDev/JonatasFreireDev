import { Lang } from "../Lang.type";
import { br, en } from "../translates";
import { useLocale } from "./useLocale";

type AnyObject = Record<string, any>;

function accessProperty(obj: AnyObject, path: string): any {
  const paths = path.split(".");
  let value = obj;

  for (const prop of paths) {
    if (value.hasOwnProperty(prop)) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value;
}

export const useTranslation = () => {
  const { locale, setLocale } = useLocale();

  const t = (path: string) => {
    const sw = {
      [Lang.en.locale]: accessProperty(en, path),
      [Lang.br.locale]: accessProperty(br, path),
    };

    return sw[locale || Lang.en.locale];
  };

  const setLocal = (locale: string) => setLocale(locale);

  return { t, locale, setLocal };
};
