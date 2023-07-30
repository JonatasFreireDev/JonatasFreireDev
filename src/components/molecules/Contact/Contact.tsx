"use client";
import { memo } from "react";

import { useTranslation } from "@/locales";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { Title } from "@/components/atoms/Title";
import { CircularPhoto } from "@/components/atoms/CircularPhoto";
import { IconLink } from "@/components/atoms/IconLink";

import * as S from "./Contact.styles";

export const Contact = memo(() => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Title
        text={t("welcome.title")}
        algin="center"
        efect="animate-appearFromTop"
      />

      <CircularPhoto />

      <S.ContactContainer efect="animate-appearFromBottom">
        <IconLink
          icon={BsLinkedin}
          href={"https://www.linkedin.com/in/jonatas-freire-557088139/"}
        />
        <IconLink icon={FiMail} href={"mailto:jonatasf1997@hotmail.com"} />
        <IconLink
          icon={BsGithub}
          href={"https://github.com/JonatasFreireDev"}
        />
      </S.ContactContainer>
    </S.Container>
  );
});
