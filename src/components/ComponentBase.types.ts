export interface IComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type BaseComponentWithoutChildren = Omit<
  IComponentBaseProps,
  "children"
>;

export type BaseComponentWithoutClassName = Omit<
  IComponentBaseProps,
  "className"
>;

export type ISizes = "sm" | "md" | "lg";
