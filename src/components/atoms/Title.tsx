import React from "react";
import { IComponentBaseProps } from "../ComponentBase";

export function Title({ children, className, ...rest }: IComponentBaseProps) {
  return (
    <span className={`font-bold text-xl ${className}`} {...rest}>
      {children}
    </span>
  );
}
