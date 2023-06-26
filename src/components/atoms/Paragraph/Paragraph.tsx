"use client";
import { withFadeIn } from "../../hoc";

import { IParagraphProps } from "./Paragraph.types";

export const Paragraph = withFadeIn(
  ({ className, text, ...rest }: IParagraphProps) => {
    return (
      <p className={`my-1 leading-6 ${className ?? ""}`} {...rest}>
        {text}
      </p>
    );
  }
);
