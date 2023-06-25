import { IComponentBaseProps } from "@/components/ComponentBase.types";
import { Icon } from "react-feather";

export interface IIconTextProps extends IComponentBaseProps {
  icon: Icon;
  content: String;
  side?: "left" | "right";
}
