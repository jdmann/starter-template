import { ark } from "@ark-ui/react/factory";
import * as React from "react";
import { cn } from "../lib/utils";

export const LabelRoot = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof ark.label>
>(({ className, ...props }, ref) => (
  <ark.label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
LabelRoot.displayName = "LabelRoot";
