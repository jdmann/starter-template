import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import * as React from "react";
import { cn } from "../lib/utils";

export const SwitchRoot = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof ArkSwitch.Root>
>(({ className, ...props }, ref) => (
  <ArkSwitch.Root
    ref={ref}
    className={cn("group inline-flex items-center", className)}
    {...props}
  >
    <ArkSwitch.Control className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200">
      <ArkSwitch.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
    </ArkSwitch.Control>
    <ArkSwitch.HiddenInput />
  </ArkSwitch.Root>
));
SwitchRoot.displayName = "SwitchRoot";
