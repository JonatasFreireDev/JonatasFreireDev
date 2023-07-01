import { IComponentBaseProps, ISizes } from "@/components/ComponentBase.types";
export interface IPaperProps extends IComponentBaseProps {
  rounded?: ISizes;
  border?: "none" | ISizes;
}
