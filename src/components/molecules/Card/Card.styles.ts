import { w } from "windstitch";

import { Paper } from "@/components/atoms/Paper";

export const Container = w(Paper, {
  defaultProps: { border: "sm", rounded: "sm" },
  className:
    "flex justify-start flex-col items-center flex-wrap hover:border-primary-400 hover:translate-y-0 bg-tertiary-900",
});
