import { w } from "windstitch";

import { Paper } from "@/components/atoms";

export const Container = w(Paper, {
  defaultProps: { border: "sm", rounded: "sm" },
  className:
    "flex justify-start flex-col items-center hover:border-primary-400 hover:translate-y-0 bg-tertiary-900",
});

export const Title = w.h3("font-bold mb-6 text-lg");

export const Content = w.div("grid grid-cols-3 gap-4");
