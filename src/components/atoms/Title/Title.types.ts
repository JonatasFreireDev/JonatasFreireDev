import {
  BaseComponentWithoutChildren,
  ISizes,
} from "@/components/ComponentBase.types";

export interface ITitleProps extends BaseComponentWithoutChildren {
  text: string;
  algin?: "left" | "center" | "right";
  size?: ISizes;
}
