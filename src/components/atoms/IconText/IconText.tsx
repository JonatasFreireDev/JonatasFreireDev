import { memo } from "react";
import { w } from "windstitch";

import * as S from "./IconText.styles";

import { IIconTextProps } from "./IconText.types";

export const IconText = memo<IIconTextProps>(
  ({ icon: IconF, side = "left", content }) => {
    const Icon = w(IconF, {
      variants: {
        side: {
          left: "order-1",
          right: "order-3",
        },
      },
    });

    return (
      <S.Container>
        <Icon side={side} size={22} />
        <S.Text>{content}</S.Text>
      </S.Container>
    );
  }
);
