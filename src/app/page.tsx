import { Container } from "@/components/atoms/Container";

import { ScrollButton } from "@/components/molecules/ScrollButton";
import { AboutMe } from "@/components/organisms/AboutMe";
import { Projects } from "@/components/organisms/Projects";
import { Techs } from "@/components/organisms/Techs";
import { Welcome } from "@/components/organisms/Welcome";

import { Footer } from "@/components/svg/footer";
import { Waves } from "@/components/svg/waves";

export default function Home() {
  return (
    <Container size="full">
      {/* Header */}
      <Welcome />

      {/* About Me */}
      <AboutMe />
      <Waves />

      {/* Techs */}
      <Techs />

      {/* Projects */}
      <Projects />

      <Footer />
      <ScrollButton />
    </Container>
  );
}
