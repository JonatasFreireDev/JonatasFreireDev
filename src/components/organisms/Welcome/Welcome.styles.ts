import { w } from "windstitch";

export const Container = w.header(`flex min-w-full min-h-screen`);

export const Image = w.section(
  `
  min-w-full min-h-screen opacity-40 
  bg-header grayscale-[85%] bg-cover bg-no-repeat bg-center
  `
);

export const Content = w.section(
  `absolute min-w-full min-h-screen flex flex-col items-center justify-center gap-7`
);
