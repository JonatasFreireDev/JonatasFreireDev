import { memo } from "react";
import { w } from "windstitch";
import Link from "next/link";

import * as S from "./IconLink.styles";

import { IIconLinkProps } from "./IconLink.types";

export const IconLink = memo<IIconLinkProps>(
  ({ icon: IconF, href, side = "left", content, ...rest }) => {
    const Icon = w(IconF, {
      variants: {
        side: {
          left: "order-1",
          right: "order-3",
        },
      },
    });

    if (!content) {
      return (
        <S.Container {...rest}>
          <Link className={"order-2"} href={href} target="_blank">
            <Icon side={side} size={30} />
          </Link>
        </S.Container>
      );
    }

    return (
      <S.Container hascontent {...rest}>
        <Icon side={side} size={22} />
        <Link className={"order-2"} href={href} target="_blank">
          {content}
        </Link>
      </S.Container>
    );
  }
);
