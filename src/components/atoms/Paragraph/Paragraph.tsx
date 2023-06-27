"use client";
import { withFadeIn } from "../../hoc";

import * as S from "./Paragraph.styles";

import { IParagraphProps } from "./Paragraph.types";

export const Paragraph = withFadeIn(
  ({ className, text, ...rest }: IParagraphProps) => (
    <S.Text className={`${className ?? ""}`} {...rest}>
      {text}
    </S.Text>
  )
);
