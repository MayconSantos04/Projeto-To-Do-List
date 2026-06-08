import React from "react";
import Text from "./Text";
import Skeleton from "./Skeleton";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const badgeSkeletonVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "bg-green-light",
      secondary: "bg-pink-light",
    },
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ variant, size }),
          className,
        )}
      />
    );
  }

  return (
    <div className={cx(badgeVariants({ variant, size }), className)} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
