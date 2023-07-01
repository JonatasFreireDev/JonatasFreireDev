import { w } from "windstitch";
import { withFadeIn } from "@/components/hoc";

export const Container = w.div(
  `flex flex-col justify-center items-center gap-5`
);

const ContactContainerBase = w.section(
  `flex justify-center items-center gap-4 transition-all hover:text-secondary-400`
);

export const ContactContainer = withFadeIn(ContactContainerBase);
