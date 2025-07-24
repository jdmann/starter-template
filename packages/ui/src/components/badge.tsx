import { ark } from "@ark-ui/react/factory";
import * as React from "react";
import { cn } from "../lib/utils";

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof ark.div> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const badgeStyles = {
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
  variants: {
    default: "border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80",
    secondary:
      "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80",
    destructive:
      "border-transparent bg-red-500 text-gray-50 hover:bg-red-500/80",
    outline: "text-gray-950 border-gray-200",
  },
};

export const BadgeRoot = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <ark.div
        ref={ref}
        className={cn(
          badgeStyles.base,
          badgeStyles.variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
BadgeRoot.displayName = "BadgeRoot";
