import { Portal } from "@ark-ui/react/portal";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import * as React from "react";
import { cn } from "../lib/utils";

export const TooltipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export const TooltipRoot = ArkTooltip.Root;

export const TooltipTrigger = ArkTooltip.Trigger;

export const TooltipPortal = Portal;

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkTooltip.Content>
>(({ className, ...props }, ref) => (
  <ArkTooltip.Positioner>
    <ArkTooltip.Content
      ref={ref}
      className={cn(
        "z-50 overflow-hidden rounded-md border border-gray-200 bg-gray-950 px-3 py-1.5 text-sm text-gray-50 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      )}
      {...props}
    />
  </ArkTooltip.Positioner>
));
TooltipContent.displayName = "TooltipContent";
