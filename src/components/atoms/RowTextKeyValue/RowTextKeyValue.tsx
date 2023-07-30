import React, { memo } from "react";

import { IRowTextKeyValueProps } from "./RowTextKeyValue.types";

import * as S from "./RowTextKeyValue.styles";

export const RowTextKeyValue = memo<IRowTextKeyValueProps>(
  ({ keyText, valueText, ...rest }) =>
    valueText ? (
      <S.Container
        className="flex w-full flex-row justify-between items-center border-b-tertiary-800 border-b-2"
        {...rest}
      >
        <div className="mr-5">{keyText}</div>
        <div>{valueText}</div>
      </S.Container>
    ) : null
);
