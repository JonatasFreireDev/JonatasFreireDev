import { IComponentBaseProps, ISizes } from "@/components/ComponentBase.types";

type Sizes = Exclude<ISizes, "lg">;

export interface IContainerProps extends IComponentBaseProps {
  title?: string;
  size?: Sizes | "full";
}
