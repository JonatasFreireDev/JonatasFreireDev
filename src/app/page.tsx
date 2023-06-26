import { Inter } from "next/font/google";
import { Container } from "@/components/atoms/Container/Container";
import { Welcome } from "@/components/organisms/Welcome";
import { AboutMe } from "@/components/organisms/AboutMe";
import { Contact } from "@/components/organisms/Contact";

import { Footer } from "@/components/svg/footer";
import { Waves } from "@/components/svg/waves";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container size="full">
      {/* Header */}
      <Welcome />

      {/* About Me */}
      <AboutMe />
      <Waves />

      {/* Techs */}

      {/* Projects */}

      {/* Contact */}
      <Contact />
      <Footer />
    </Container>
  );
}
