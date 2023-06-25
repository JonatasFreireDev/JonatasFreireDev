import { memo } from "react";

import { IIconTextProps } from "./IconText.types";

export const IconText = memo<IIconTextProps>(
  ({ icon: Icon, side = "left", content }) => (
    <div className="flex flex-row gap-2">
      <Icon className={`order-${side === "left" ? 1 : 3}`} size={22} />
      <span className={"order-2"}>{content}</span>
    </div>
  )
);
