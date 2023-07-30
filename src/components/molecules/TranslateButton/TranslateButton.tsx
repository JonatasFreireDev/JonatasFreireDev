import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { useTranslation } from "@/locales";

import { Lang } from "@/locales/Lang.type";

export const TranslateButton = () => {
  const { push } = useRouter();
  const { locale } = useTranslation();

  const switchLang = useMemo(() => {
    const relativeLang = {
      [Lang.en.locale]: Lang.br.locale,
      [Lang.br.locale]: Lang.en.locale,
    };

    return relativeLang[locale || Lang.en.locale];
  }, [locale]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "50px",
        zIndex: 1,
      }}
    >
      <button
        onClick={() => {
          push(`/${switchLang}`);
        }}
        style={{
          position: "fixed",
          top: "10px",
        }}
      >
        {switchLang?.split("-")[0].toUpperCase()}
      </button>
    </div>
  );
};
