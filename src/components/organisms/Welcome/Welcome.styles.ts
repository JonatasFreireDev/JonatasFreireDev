import { withFadeIn } from "@/components/hoc";
import { w } from "windstitch";

export const Container = w.header(`flex min-w-full min-h-screen`);
const ContactContainerBase = w.section(
  `flex gap-4 transition-all hover:text-secondary-400`
);

export const ContactContainer = withFadeIn(ContactContainerBase);

export const Image = w.section(
  `
  min-w-full min-h-screen opacity-40 
  bg-header grayscale-[85%] bg-cover bg-no-repeat bg-center
  `
);

export const Content = w.section(
  `absolute min-w-full min-h-screen flex flex-col items-center justify-center gap-7`
);
