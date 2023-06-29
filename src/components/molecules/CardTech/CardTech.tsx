import { Paper } from "@/components/atoms";

import { ICardTechProps } from "./CardTech.types";

export const CardTech = ({ Icon, handleActive }: ICardTechProps) => (
  <div onMouseEnter={handleActive}>
    <Paper border="sm" className="flex hover:text-primary-400 p-3">
      <Icon size={40} />
    </Paper>
  </div>
);
