import { IComponentBaseProps } from "@/components/ComponentBase.types";

import { IconType } from "react-icons";

export interface IIconLinkProps extends IComponentBaseProps {
  icon: IconType;
  href: string;
  content?: String;
  side?: "left" | "right";
}
