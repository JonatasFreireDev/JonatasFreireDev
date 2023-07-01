"use client";
import { withFadeIn } from "../../hoc";

import * as S from "./Paragraph.styles";

import { IParagraphProps } from "./Paragraph.types";

export const Paragraph = withFadeIn(({ text, ...rest }: IParagraphProps) => (
  <S.Text {...rest}>{text}</S.Text>
));
