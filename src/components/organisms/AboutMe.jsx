import React from "react";
import { Title } from "../atoms/Title";
import { ParagraphHOC } from "../atoms/Paragraph";

export function AboutMe() {
  return (
    <div
      className=" min-h-screen max-w-7xl
                    grid grid-rows-2 grid-cols-1 p-10
                    md:grid-rows-1 sm:grid-cols-1 md:grid-cols-2 md:gap-10 
                    xl:grid-cols-3
                    justify-center justify-items-center items-center"
    >
      <div className="flex-1 bg-primary-400 min-w-full min-h-full">sei la</div>
      <div className="flex xl:col-span-2 flex-col p-5 text-justify">
        <Title>Sobre Mim</Title>
        <ParagraphHOC
          efect="animate-appearFromBottom"
          text="Olá, meu nome é Jonatas Freire e sou um desenvolvedor React apaixonado
          por construir interfaces de usuário atraentes e funcionais para
          aplicativos web. Com 2 anos de experiência em desenvolvimento web,
          tenho trabalhado em vários projetos que me permitiram aprimorar minhas
          habilidades em React e outras tecnologias relacionadas."
        />
        <ParagraphHOC
          efect="animate-appearFromNothing"
          text=" Minha jornada no desenvolvimento começou como um hobby, mas
          rapidamente percebi que era algo que queria fazer profissionalmente.
          Desde então, tenho trabalhado em projetos para clientes de diferentes
          setores, desde startups até empresas estabelecidas, tornando a vida
          das pessoas mais fácil e eficiente."
        />
        <ParagraphHOC
          efect="animate-appearFromLeft"
          text="No meu trabalho, gosto de manter-me atualizado com as últimas
          tendências e tecnologias em desenvolvimento front-end, e estou sempre
          procurando maneiras de melhorar minha abordagem ao desenvolvimento."
        />
        <ParagraphHOC
          efect="animate-appearFromRight"
          text="Se você está procurando um desenvolvedor React experiente e apaixonado
          pelo seu trabalho, não hesite em entrar em contato comigo. Adoraria
          discutir seus projetos e ver como podemos trabalhar juntos para criar
          algo incrível!"
        />
      </div>
    </div>
  );
}
