import { ark } from "@ark-ui/react/factory";
import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof ark.input> {
  type?: string;
}

export const InputRoot = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <ark.input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
InputRoot.displayName = "InputRoot";
