import { memo } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import { CircularPhoto, IconLink } from "@/components/atoms";

import { FiMail } from "react-icons/fi";

import * as S from "./Contact.styles";
import { Title } from "@/components/atoms/Title";

export const Contact = memo(() => (
  <S.Container className="">
    <Title text="Bem Vindo" efect="animate-appearFromTop" />

    <CircularPhoto />

    <S.ContactContainer efect="animate-appearFromBottom">
      <IconLink
        icon={BsLinkedin}
        href={"https://www.linkedin.com/in/jonatas-freire-557088139/"}
      />
      <IconLink icon={FiMail} href={"mailto:jonatasf1997@hotmail.com"} />
      <IconLink icon={BsGithub} href={"https://github.com/JonatasFreireDev"} />
    </S.ContactContainer>
  </S.Container>
));
