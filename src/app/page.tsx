import { Container } from "@/components/atoms";
import { Welcome, AboutMe, Techs } from "@/components/organisms";

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

      <Footer />
    </Container>
  );
}
