"use client";
import { Contact } from "@/components/molecules";

import * as S from "./Welcome.styles";

export function Welcome() {
  return (
    <S.Container>
      <S.Background />
      <Contact />
    </S.Container>
  );
}
