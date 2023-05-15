import React from "react";

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: IContainerProps) {
  return (
    <section className={`flex flex-col items-center min-w-screen ${className}`}>
      {children}
    </section>
  );
}
