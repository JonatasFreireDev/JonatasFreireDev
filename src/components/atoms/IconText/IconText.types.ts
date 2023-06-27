import { IComponentBaseProps } from "@/components/ComponentBase.types";

import { IconType } from "react-icons";

export interface IIconTextProps extends IComponentBaseProps {
  icon: IconType;
  content: String;
  side?: "left" | "right";
}
