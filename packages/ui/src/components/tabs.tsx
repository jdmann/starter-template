import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import * as React from "react";
import { cn } from "../lib/utils";

export const TabsRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkTabs.Root>
>(({ className, ...props }, ref) => (
  <ArkTabs.Root ref={ref} className={cn("w-full", className)} {...props} />
));
TabsRoot.displayName = "TabsRoot";

export const TabsList = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkTabs.List>
>(({ className, ...props }, ref) => (
  <ArkTabs.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ArkTabs.Trigger>
>(({ className, ...props }, ref) => (
  <ArkTabs.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkTabs.Content>
>(({ className, ...props }, ref) => (
  <ArkTabs.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
