import { Linkedin, Mail, GitHub } from "react-feather";
import { Columns, Container, IconLink } from "../atoms";

export const Contact = () => {
  return (
    <Container size="full">
      <Columns quantity={4}>
        <IconLink
          icon={Linkedin}
          href={"https://www.linkedin.com/in/jonatas-freire-557088139/"}
          content={"Linkedin"}
        />
        <IconLink
          icon={Mail}
          href={"mailto:jonatasf1997@hotmail.com"}
          content={"Email"}
        />
        <IconLink
          icon={GitHub}
          href={"https://github.com/JonatasFreireDev"}
          content={"GitHub"}
        />
      </Columns>
    </Container>
  );
};
