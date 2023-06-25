import { IComponentBaseProps } from "@/components/ComponentBase.types";

type TParagraphProps = Omit<IComponentBaseProps, "children">;

export interface IParagraphProps extends TParagraphProps {
  text: string;
}
