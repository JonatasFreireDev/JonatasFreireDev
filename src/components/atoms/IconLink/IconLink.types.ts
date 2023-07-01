import { BaseComponentWithoutChildren } from "@/components/ComponentBase.types";

import { IconType } from "react-icons";

export interface IIconLinkProps extends BaseComponentWithoutChildren {
  icon: IconType;
  href: string;
  content?: String;
  side?: "left" | "right";
}
