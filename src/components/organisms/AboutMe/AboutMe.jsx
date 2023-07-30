import Image from "next/image";

import { Container } from "@/components/atoms/Container";
import { Paragraph } from "@/components/atoms/Paragraph";

import { useTranslation } from "@/locales";

import foto from "../../../assets/jonatas.jpg";

import * as S from "./AboutMe.styles";

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <Container size="md" title={t("aboutMe.title")} className="mt-52">
      <S.Columns>
        <Image alt="Jonatas" src={foto} className="rounded-2xl md:w-3/4" />
        <S.DescriptionContainer>
          <Paragraph text={t("aboutMe.paragraph1")} />
          <Paragraph text={t("aboutMe.paragraph2")} />
          <Paragraph text={t("aboutMe.paragraph3")} />
          <Paragraph text={t("aboutMe.paragraph4")} />
        </S.DescriptionContainer>
      </S.Columns>
    </Container>
  );
}
