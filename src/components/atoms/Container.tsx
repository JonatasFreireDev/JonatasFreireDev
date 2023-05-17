import React from "react";
import { IComponentBaseProps } from "../ComponentBase";

export function Container({ className, children }: IComponentBaseProps) {
  return (
    <section className={`flex flex-col items-center min-w-screen ${className}`}>
      {children}
    </section>
  );
}
