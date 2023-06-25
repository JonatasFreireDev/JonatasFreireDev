import { IComponentBaseProps } from "@/components/ComponentBase.types";

import { Icon } from "react-feather";
import { URL } from "url";

export interface IIconLinkProps extends IComponentBaseProps {
  icon: Icon;
  href: URL;
  content: String;
  side?: "left" | "right";
}
