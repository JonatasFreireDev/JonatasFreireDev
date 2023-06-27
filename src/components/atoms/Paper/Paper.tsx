import { memo } from "react";

import { IPaperProps } from "./Paper.types";

import * as S from "./Paper.styles";

export const Paper = memo<IPaperProps>(
  ({ rounded = "md", className, children }) => (
    <S.Container rounded={rounded} className={`${className ?? ""}`}>
      {children}
    </S.Container>
  )
);
