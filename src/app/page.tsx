import { Inter } from "next/font/google";
import { Container } from "@/components/atoms/Container";
import { Welcome } from "@/components/molecules/Welcome";
import { TesteHOC } from "@/components/molecules/Teste";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container className="z-10 min-h-[2000px] bg-tertiary-900">
      {/* Header */}
      <Welcome />
      {/* About Me */}
      {/* Techs */}
      {/* Projects */}
      {/* Contact */}
      <div className="flex min-w-full min-h-full mt-12">aew</div>
    </Container>
  );
}
