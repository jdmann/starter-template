import { ark } from "@ark-ui/react/factory";
import * as React from "react";
import { cn } from "../lib/utils";

export const TextareaRoot = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<typeof ark.textarea>
>(({ className, ...props }, ref) => {
  return (
    <ark.textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
TextareaRoot.displayName = "TextareaRoot";
