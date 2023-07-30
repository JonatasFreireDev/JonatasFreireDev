import { BaseComponentWithoutChildren } from "@/components/ComponentBase.types";

export interface IRowTextKeyValueProps extends BaseComponentWithoutChildren {
  keyText: string;
  valueText: string | React.ReactElement;
}
