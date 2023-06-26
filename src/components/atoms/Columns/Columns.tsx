import { Children, ReactNode, memo, useMemo } from "react";
import { Container } from "../Container/Container";

import { IColumnsProps } from "./Columns.types";

export const Columns = memo<IColumnsProps>(({ className, children }) => {
  const countChildren = useMemo(() => Children.count(children), [children]);

  return (
    <Container>
      <section
        className={`grid grid-rows-1 justify-center justify-items-center
                    items-center
                    grid-cols-1 gap-10
                    sm:grid-cols-1 sm:gap-5
                    md:grid-cols-${countChildren} md:gap-10
                    xl:grid-cols-${countChildren} xl:gap-20 
                    ${className ?? ""}
        `}
      >
        {Children.map(children, (child: ReactNode) => child)}
      </section>
    </Container>
  );
});
