"use client";
import { withFadeIn } from "@/components/hoc";

import * as S from "./ParagraphTitle.styles";

import { IParagraphTitleProps } from "./ParagraphTitle.types";

export const ParagraphTitle = withFadeIn(
  ({ content, className, ...rest }: IParagraphTitleProps) => (
    <S.Text className={`${className ?? ""}`} {...rest}>
      {content}
    </S.Text>
  )
);
