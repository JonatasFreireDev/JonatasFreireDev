import { ICardProps } from "./Card.types";

import { Title } from "@/components/atoms/Title";

import * as S from "./Card.styles";

export const Card = ({ title, children }: ICardProps) => (
  <S.Container>
    <Title text={title} algin="center" className="mb-5" />
    {children}
  </S.Container>
);
