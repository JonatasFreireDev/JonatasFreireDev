"use client";
import { Container } from "@/components/atoms/Container";

import { ScrollButton } from "@/components/molecules/ScrollButton";
import { TranslateButton } from "@/components/molecules/TranslateButton";
import { AboutMe } from "@/components/organisms/AboutMe";
import { Projects } from "@/components/organisms/Projects";
import { Techs } from "@/components/organisms/Techs";
import { Welcome } from "@/components/organisms/Welcome";

import { Footer } from "@/components/svg/footer";
import { Waves } from "@/components/svg/waves";
import { LocaleProvider } from "@/locales/context/Locale.provider";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <LocaleProvider lang={params.lang}>
      <Container size="full">
        {/* Header */}
        <TranslateButton />
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
    </LocaleProvider>
  );
}
