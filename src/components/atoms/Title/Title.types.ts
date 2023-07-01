import {
  BaseComponentWithoutChildren,
  ISizes,
} from "@/components/ComponentBase.types";

export interface ITitleProps extends BaseComponentWithoutChildren {
  text: string;
  textAlign?: "left" | "center" | "right";
  textSize?: ISizes;
}
