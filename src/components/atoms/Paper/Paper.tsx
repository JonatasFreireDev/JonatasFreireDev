import { memo, useMemo } from "react";

import { IPaperProps } from "./Paper.types";

export const Paper = memo<IPaperProps>(({ rounded = "md", children }) => {
  const sizeStyle = useMemo(
    () => ({
      ["sm"]: "rounded-xl",
      ["md"]: "rounded-2xl",
      ["lg"]: "rounded-3xl",
    }),
    []
  );

  return (
    <div
      className={`${sizeStyle[rounded]} p-6 bg-tertiary-800  border-tertiary-700
                  transition-all hover:-translate-y-1
                  transition-color hover:border-secondary-400 hover:border-2`}
    >
      {children}
    </div>
  );
});
