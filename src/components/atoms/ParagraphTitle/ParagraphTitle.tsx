import { IParagraphTitleProps } from "./ParagraphTitle.types";

export const ParagraphTitle = ({
  content,
  className,
  ...rest
}: IParagraphTitleProps) => {
  return (
    <span className={`font-bold text-2xl ${className ?? ""}`} {...rest}>
      {content}
    </span>
  );
};
