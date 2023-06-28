import { IComponentBaseProps } from "@/components/ComponentBase.types";

import { IconType } from "react-icons";

export interface ICardTechProps extends IComponentBaseProps {
  Icon: IconType;
  handleActive: () => void;
}
