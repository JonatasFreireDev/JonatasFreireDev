import { memo } from "react";

import { withFadeIn } from "@/components/hoc";
import { ITitleProps } from "./Title.types";

import * as S from "./Title.styles";

export const Title = memo(
  withFadeIn(({ text, textAlign, textSize }: ITitleProps) => (
    <S.Container textAlign={textAlign}>
      <S.Title textSize={textSize}>{text}</S.Title>
    </S.Container>
  ))
);
