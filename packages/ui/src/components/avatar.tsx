import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import * as React from "react";
import { cn } from "../lib/utils";

export const AvatarRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Root>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarRoot.displayName = "AvatarRoot";

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Image>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
