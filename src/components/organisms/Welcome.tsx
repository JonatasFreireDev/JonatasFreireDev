import { CircularPhoto, ParagraphTitle } from "../atoms";

export function Welcome() {
  return (
    <header className="flex min-w-full min-h-screen">
      <section
        className="min-w-full min-h-screen opacity-40 
                  bg-header grayscale-[85%] bg-cover bg-no-repeat bg-center"
      />
      <section className="absolute min-w-full min-h-screen flex flex-col items-center justify-center gap-7">
        <CircularPhoto />
        <ParagraphTitle content={"Bem Vindo"} />
      </section>
    </header>
  );
}
