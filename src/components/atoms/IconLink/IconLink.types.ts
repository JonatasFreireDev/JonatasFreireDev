import { IComponentBaseProps } from "@/components/ComponentBase.types";

import { Icon } from "react-feather";

export interface IIconLinkProps extends IComponentBaseProps {
  icon: Icon;
  href: string;
  content?: String;
  side?: "left" | "right";
}
