import { CircularPhoto, ParagraphTitle } from "@/components/atoms";

import * as S from "./Welcome.styles";

export function Welcome() {
  return (
    <S.Container>
      <S.Image />
      <S.Content>
        <CircularPhoto />
        <ParagraphTitle
          efect="animate-appearFromBottom"
          content={"Bem Vindo"}
        />
      </S.Content>
    </S.Container>
  );
}
