import { w } from "windstitch";

export const Container = w.header(
  `flex min-w-full min-h-screen items-center justify-center`
);

export const Background = w.section(
  `
  absolute min-w-full min-h-screen opacity-40 
  bg-header grayscale-[85%] bg-cover bg-no-repeat bg-center
  `
);
