import { ICardProps } from "./Card.types";

import { Title } from "@/components/atoms";

import * as S from "./Card.styles";

export const Card = ({ title, children }: ICardProps) => {
  return (
    <S.Container>
      <Title text={title} algin="center" className="mb-5" />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
