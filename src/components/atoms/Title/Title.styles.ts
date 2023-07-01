import { w } from "windstitch";

export const Container = w.div(
  `
  flex w-full
`,
  {
    variants: {
      algin: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
    },
    defaultVariants: {
      algin: "right",
    },
  }
);

export const Title = w.h2(`font-bold`, {
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
