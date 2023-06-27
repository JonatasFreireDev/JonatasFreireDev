"use client";
import { CircularPhoto, IconLink, ParagraphTitle } from "@/components/atoms";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import * as S from "./Welcome.styles";

export function Welcome() {
  return (
    <S.Container>
      <S.Image />
      <S.Content>
        <ParagraphTitle efect="animate-appearFromTop" content={"Bem Vindo"} />
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
      </S.Content>
    </S.Container>
  );
}
