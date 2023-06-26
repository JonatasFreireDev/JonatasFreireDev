import { memo, useMemo } from "react";

import { IContainerProps } from "./Container.types";

export const Container = memo<IContainerProps>(
  ({ size = "md", className, children }) => {
    const sizeStyle = useMemo(
      () => ({
        ["sm"]: "w-2/4 max-w-xl",
        ["md"]: "w-3/4 max-w-6xl",
        ["full"]: "min-w-full",
      }),
      []
    );

    return (
      <div
        className={`flex flex-col items-center bg-tertiary-900 
                    ${sizeStyle[size]} ${className ?? ""}`}
      >
        {children}
      </div>
    );
  }
);
