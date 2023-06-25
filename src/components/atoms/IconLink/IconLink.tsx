import { memo } from "react";
import Link from "next/link";

import { IIconLinkProps } from "./IconLink.types";

export const IconLink = memo<IIconLinkProps>(
  ({ icon: Icon, href, side = "left", content }) => (
    <div
      className="flex flex-row gap-2 cursor-pointer 
                  transition-all
                  hover:text-primary-400 hover:opacity-90"
    >
      <Icon className={`order-${side === "left" ? 1 : 3}`} size={22} />
      <Link className={"order-2"} href={href} target="_blank">
        {content}
      </Link>
    </div>
  )
);
