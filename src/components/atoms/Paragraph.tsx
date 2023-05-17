"use client";
import React from "react";
import { IComponentBaseProps } from "../ComponentBase";
import { FadeInHOC } from "../hoc/FadeIn.hoc";

type TParagraphProps = Omit<IComponentBaseProps, "children">;

interface IParagraphProps extends TParagraphProps {
  text: string;
}

function Paragraph({ className, text, ...rest }: IParagraphProps) {
  return (
    <p className={`my-1 ${className ? className : ""}`} {...rest}>
      {text}
    </p>
  );
}

export const ParagraphHOC = FadeInHOC(Paragraph);
