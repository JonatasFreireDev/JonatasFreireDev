import { memo } from "react";

import { IPaperProps } from "./Paper.types";

import * as S from "./Paper.styles";

export const Paper = memo<IPaperProps>(
  ({ rounded = "md", border = "none", className, children }) => (
    <S.Container
      rounded={rounded}
      border={border}
      className={`${className ?? ""}`}
    >
      {children}
    </S.Container>
  )
);
