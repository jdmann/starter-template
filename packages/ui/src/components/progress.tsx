import { Progress as ArkProgress } from "@ark-ui/react/progress";
import * as React from "react";
import { cn } from "../lib/utils";

export const Progress = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkProgress.Root>
>(({ className, ...props }, ref) => (
  <ArkProgress.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-gray-100",
      className
    )}
    {...props}
  >
    <ArkProgress.Track className="h-full w-full bg-gray-100">
      <ArkProgress.Range className="h-full bg-gray-900 transition-all" />
    </ArkProgress.Track>
  </ArkProgress.Root>
));
Progress.displayName = "Progress";
