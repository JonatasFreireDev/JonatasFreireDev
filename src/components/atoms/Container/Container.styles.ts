import { w } from "windstitch";

export const Container = w.div(`flex flex-col items-center bg-tertiary-900`, {
  variants: {
    size: {
      sm: "w-2/4 max-w-xl",
      md: "w-3/4 max-w-6xl",
      full: "min-w-full",
    },
  },
});
