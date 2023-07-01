import { w } from "windstitch";

export const Container = w.div(
  `flex flex-col items-center bg-tertiary-900 min-h-screen justify-center`,
  {
    variants: {
      size: {
        sm: "w-2/4 max-w-xl",
        md: "w-3/4 max-w-6xl",
        full: "min-w-full p-5",
      },
    },
  }
);

export const Title = w.h1("font-bold text-4xl self-end my-10");
