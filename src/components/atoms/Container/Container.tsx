import { memo } from "react";

import { IContainerProps } from "./Container.types";

import * as S from "./Container.styles";

export const Container = memo<IContainerProps>(
  ({ size = "md", className, children }) => (
    <S.Container size={size} className={`${className ?? ""}`}>
      {children}
    </S.Container>
  )
);
