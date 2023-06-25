import { Children, ReactNode, memo, useMemo } from "react";
import { Container } from "../Container/Container";

import { IColumnsProps } from "./Columns.types";

export const Columns = memo<IColumnsProps>(({ quantity = 2, children }) => {
  const countChildren = useMemo(() => Children.count(children), [children]);

  return (
    <Container size="full">
      <section
        className={`min-h-screen min-w-min 
                    justify-center justify-items-center items-center grid 
                    gap-6  my-20
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-${quantity} md:gap-0 md:my-0
                    xl:grid-cols-${quantity} md:gap-6 md:my-20
                  `}
      >
        {Children.map(children, (child: ReactNode) => child)}
      </section>
    </Container>
  );
});
