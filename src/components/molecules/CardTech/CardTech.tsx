import { ICardTechProps } from "./CardTech.types";

export const CardTech = ({ Icon, handleActive }: ICardTechProps) => (
  <div
    onMouseEnter={handleActive}
    className="flex  w-16 bg-tertiary-800  border-tertiary-700
                transition-all hover:-translate-y-1
                transition-color hover:border-secondary-400
                hover:text-primary-400 justify-center p-2 rounded-2xl border-2"
  >
    <Icon size={40} />
  </div>
);
