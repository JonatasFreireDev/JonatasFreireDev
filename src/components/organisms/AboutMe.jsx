import { ParagraphTitle, Paragraph, Columns, Container, Paper } from "../atoms";

export function AboutMe() {
  return (
    <Container className="bg-secondary-400">
      <Columns>
        <div className="">sei la</div>
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

        <Paper rounded="md">
          <div className="min-w-full">salve meus amiguinhos do mal</div>
        </Paper>
        <Paper rounded="lg">salve meus amiguinhos do mal</Paper>
      </Columns>
    </Container>
  );
}
