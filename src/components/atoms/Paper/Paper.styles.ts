import { w } from "windstitch";

export const Container = w.div(
  `
  p-6 bg-tertiary-800  border-tertiary-700
  transition-all hover:-translate-y-1
  transition-color hover:border-secondary-400 hover:border-2
`,
  {
    variants: {
      rounded: {
        sm: "rounded-xl",
        md: "rounded-2xl",
        lg: "rounded-3xl",
      },
    },
  }
);
