import { w } from "windstitch";

export const Container = w.div(
  `
  flex w-full
`,
  {
    variants: {
      textAlign: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
    },
    defaultVariants: {
      textAlign: "right",
    },
  }
);

export const Title = w.h2(`font-bold`, {
  variants: {
    textSize: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    textSize: "md",
  },
});
