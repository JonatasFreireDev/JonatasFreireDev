import { BaseComponentWithoutChildren } from "@/components/ComponentBase.types";

import { IconType } from "react-icons";

export interface IIconTextProps extends BaseComponentWithoutChildren {
  icon: IconType;
  content: String;
  side?: "left" | "right";
}
