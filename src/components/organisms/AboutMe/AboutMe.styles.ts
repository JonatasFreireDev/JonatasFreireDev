import { w } from "windstitch";

export const Columns = w.div(
  `
    min-h-screen grid justify-center justify-items-center
    items-center grid-cols-1 gap-10
    sm:gap-5
    md:grid-cols-2 md:gap-10
    xl:gap-20
  `
);

export const ImageContainer = w.div(
  `max-h-full sm:max-w-xs md:max-w-sm  lg:max-w-md`
);

export const DescriptionContainer = w.div(`flex flex-col text-justify`);
