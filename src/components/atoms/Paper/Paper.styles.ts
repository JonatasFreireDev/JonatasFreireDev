import { w } from "windstitch";

export const Container = w.div(
  `
  p-6 bg-tertiary-800  border-tertiary-700
  transition-all hover:-translate-y-1
  transition-color hover:border-secondary-400
`,
  {
    variants: {
      rounded: {
        sm: "rounded-xl",
        md: "rounded-2xl",
        lg: "rounded-3xl",
      },
      border: {
        none: "border-0",
        sm: "border-2",
        md: "border-4",
        lg: "border-8",
      },
    },
    defaultVariants: {
      border: "none",
    },
  }
);
