import { IComponentBaseProps, ISizes } from "@/components/ComponentBase.types";

type Sizes = Exclude<ISizes, "full">;

export interface IPaperProps extends IComponentBaseProps {
  rounded?: Sizes;
}
