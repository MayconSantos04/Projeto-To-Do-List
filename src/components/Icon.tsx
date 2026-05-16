import React from "react";

export const iconVariantes = cva(" ", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconsProps extends React.ComponentProps<"svg"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: SvgComponent, ...props }: IconsProps) {
  return <SvgComponent {...props} />;
}
