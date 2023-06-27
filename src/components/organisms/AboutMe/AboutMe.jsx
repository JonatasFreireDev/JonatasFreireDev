import Image from "next/image";

import { ParagraphTitle, Paragraph, Container } from "@/components/atoms";

import foto from "../../../assets/jonatas.jpeg";

import * as S from "./AboutMe.styles";

export function AboutMe() {
  return (
    <Container size="md">
      <div
        className="min-h-screen grid justify-center justify-items-center
                    items-center grid-cols-1 gap-10
                    sm:gap-5
                    md:grid-cols-2 md:gap-10
                    xl:gap-20"
      >
        <div className="max-h-full sm:max-w-xs md:max-w-sm  lg:max-w-md">
          <Image alt="Jonatas" src={foto} className="rounded-2xl" />
        </div>
        <div className="flex flex-col text-justify">
          <ParagraphTitle content={"Sobre Mim"} />
          <Paragraph
            text="Olá, meu nome é Jonatas Freire e sou um desenvolvedor React apaixonado
          por construir interfaces de usuário atraentes e funcionais para
          aplicativos web. Com 2 anos de experiência em desenvolvimento web,
          tenho trabalhado em vários projetos que me permitiram aprimorar minhas
          habilidades em React e outras tecnologias relacionadas."
          />
          <Paragraph
            text="Minha jornada no desenvolvimento começou como um hobby, mas
          rapidamente percebi que era algo que queria fazer profissionalmente.
          Desde então, tenho trabalhado em projetos para clientes de diferentes
          setores, desde startups até empresas estabelecidas, tornando a vida
          das pessoas mais fácil e eficiente."
          />
          <Paragraph
            text="No meu trabalho, gosto de manter-me atualizado com as últimas
          tendências e tecnologias em desenvolvimento front-end, e estou sempre
          procurando maneiras de melhorar minha abordagem ao desenvolvimento."
          />
          <Paragraph
            text="Se você está procurando um desenvolvedor React experiente e apaixonado
          pelo seu trabalho, não hesite em entrar em contato comigo. Adoraria
          discutir seus projetos e ver como podemos trabalhar juntos para criar
          algo incrível!"
          />
        </div>
      </div>
    </Container>
  );
}