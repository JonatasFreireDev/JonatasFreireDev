"use client";
import { CircularPhoto, IconLink, ParagraphTitle } from "@/components/atoms";
import { GitHub, Linkedin, Mail } from "react-feather";

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
            icon={Linkedin}
            href={"https://www.linkedin.com/in/jonatas-freire-557088139/"}
          />
          <IconLink icon={Mail} href={"mailto:jonatasf1997@hotmail.com"} />
          <IconLink
            icon={GitHub}
            href={"https://github.com/JonatasFreireDev"}
          />
        </S.ContactContainer>
      </S.Content>
    </S.Container>
  );
}
