import { memo } from "react";

import { IPaperProps } from "./Paper.types";

import * as S from "./Paper.styles";

export const Paper = memo<IPaperProps>(({ children, ...rest }) => (
  <S.Container {...rest}>{children}</S.Container>
));
