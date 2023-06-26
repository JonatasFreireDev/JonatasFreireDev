import { memo } from "react";

export const CircularPhoto = memo(() => {
  return (
    <div
      className={`z-0 relative flex w-56 h-56 items-center justify-center rounded-full 
                  transition ease-in duration-300 
                  ring-8 ring-opacity-20 ring-primary-400 hover:ring-secondary-400 hover:ring-opacity-20
                bg-primary-400 hover:bg-secondary-400  
               `}
    >
      <div className="flex w-52 h-52 items-center justify-center rounded-full bg-tertiary-700 bg-headerPhoto bg-cover" />
    </div>
  );
});
