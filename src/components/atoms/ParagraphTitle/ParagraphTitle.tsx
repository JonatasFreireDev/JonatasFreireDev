"use client";
import { withFadeIn } from "@/components/hoc";

import { IParagraphTitleProps } from "./ParagraphTitle.types";

export const ParagraphTitle = withFadeIn(
  ({ content, className, ...rest }: IParagraphTitleProps) => {
    return (
      <span className={`font-bold text-2xl ${className ?? ""}`} {...rest}>
        {content}
      </span>
    );
  }
);
