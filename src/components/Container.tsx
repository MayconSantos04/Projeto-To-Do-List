import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  size,
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cx(
        containerVariants({ size }),
        className
      ),
      ...props,
    },
    children
  );
}