import { Inter } from "next/font/google";
import { Container } from "@/components/atoms/Container";
import { Welcome } from "@/components/molecules/Welcome";
import { AboutMe } from "@/components/organisms/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container className="bg-tertiary-900">
      {/* Header */}
      <Welcome />
      {/* About Me */}
      <AboutMe />
      {/* Techs */}
      {/* Projects */}
      {/* Contact */}
    </Container>
  );
}
