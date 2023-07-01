"use client";
import { memo } from "react";

import { withFadeIn } from "@/components/hoc";
import { ITitleProps } from "./Title.types";

import * as S from "./Title.styles";

export const Title = memo(
  withFadeIn(({ text, size, ...rest }: ITitleProps) => (
    <S.Container {...rest}>
      <S.Title size={size}>{text}</S.Title>
    </S.Container>
  ))
);
