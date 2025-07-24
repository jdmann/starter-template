import { ark } from "@ark-ui/react/factory";
import * as React from "react";
import { cn } from "../lib/utils";

export const CardRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ark.div>
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
      className
    )}
    {...props}
  />
));
CardRoot.displayName = "CardRoot";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ark.div>
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof ark.h3>
>(({ className, ...props }, ref) => (
  <ark.h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof ark.p>
>(({ className, ...props }, ref) => (
  <ark.p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ark.div>
>(({ className, ...props }, ref) => (
  <ark.div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ark.div>
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
