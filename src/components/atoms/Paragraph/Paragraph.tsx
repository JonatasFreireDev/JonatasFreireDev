"use client";
import React, { memo } from "react";
import { withFadeIn } from "../../hoc";

import { IParagraphProps } from "./Paragraph.types";

export const Paragraph = memo<IParagraphProps>(
  withFadeIn(({ className, text, ...rest }) => {
    return (
      <p className={`my-1 leading-6 ${className && className}`} {...rest}>
        {text}
      </p>
    );
  })
);
