import { Inter } from "next/font/google";
import { Container } from "@/components/atoms/Container/Container";
import { Welcome } from "@/components/organisms/Welcome";
import { AboutMe } from "@/components/organisms/AboutMe";
import { Contact } from "@/components/organisms/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container size="full">
      {/* Header */}
      <Welcome />
      {/* About Me */}
      <AboutMe />
      {/* Techs */}
      {/* Projects */}
      {/* Contact */}
      <Contact />
    </Container>
  );
}
