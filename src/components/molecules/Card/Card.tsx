import { ICardProps } from "./Card.types";

import * as S from "./Card.styles";

export const Card = ({ title, children }: ICardProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
