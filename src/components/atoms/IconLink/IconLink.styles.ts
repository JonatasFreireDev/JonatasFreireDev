import { w } from "windstitch";

export const Container = w.div(
  `
    flex flex-row cursor-pointer transition-all
    hover:text-primary-400 hover:opacity-90
  `,
  {
    variants: {
      hascontent: (yes: Boolean) => (yes ? "gap-2" : ""),
    },
    defaultVariants: {
      hascontent: false,
    },
  }
);
