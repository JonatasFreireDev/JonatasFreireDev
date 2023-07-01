import { memo } from "react";

import { Title } from "../Title";

import { IContainerProps } from "./Container.types";

import * as S from "./Container.styles";

export const Container = memo<IContainerProps>(
  ({ size = "md", title, children, ...rest }) => (
    <S.Container size={size} {...rest}>
      {title && (
        <Title textAlign="right" textSize="lg" text={title} className="mb-5" />
      )}
      {children}
    </S.Container>
  )
);
