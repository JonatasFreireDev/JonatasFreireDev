import React from "react";
import { IComponentBaseProps } from "../ComponentBase";

export function CircularPhoto({ className }: IComponentBaseProps) {
  return (
    <div
      className={`z-0 relative flex w-56 h-56 items-center justify-center rounded-full transition ease-in duration-300 ring-8 ring-opacity-20 ring-primary-400 bg-primary-400 hover:bg-secondary-400 hover:ring-secondary-400 hover:ring-opacity-20 ${className}`}
    >
      <div className="flex w-52 h-52 items-center justify-center rounded-full bg-tertiary-700">
        aoba
      </div>
    </div>
  );
}
