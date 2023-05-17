import React from "react";
import { CircularPhoto } from "../atoms/CircularPhoto";
import { Title } from "../atoms/Title";

export function Welcome() {
  return (
    <header className="flex min-w-full min-h-screen">
      <section
        className="min-w-full min-h-screen 
                    opacity-40 
                    bg-header grayscale-[85%] 
                    bg-cover bg-no-repeat bg-center"
      />
      <section
        className="absolute min-w-full min-h-screen 
                    flex flex-col items-center justify-between"
      >
        <div />
        <CircularPhoto />
        <div className="mb-16">
          <Title>Bem Vindo</Title>
        </div>
      </section>
    </header>
  );
}

// export const TesteHOC = EffectHoc(Teste);
