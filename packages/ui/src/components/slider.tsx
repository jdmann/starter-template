import { Slider as ArkSlider } from "@ark-ui/react/slider";
import * as React from "react";
import { cn } from "../lib/utils";

export const SliderRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkSlider.Root>
>(({ className, ...props }, ref) => (
  <ArkSlider.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <ArkSlider.Control className="relative flex w-full touch-none select-none items-center">
      <ArkSlider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-100">
        <ArkSlider.Range className="absolute h-full bg-gray-900" />
      </ArkSlider.Track>
      <ArkSlider.Thumb
        index={0}
        className="block h-5 w-5 rounded-full border-2 border-gray-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <ArkSlider.HiddenInput />
      </ArkSlider.Thumb>
    </ArkSlider.Control>
  </ArkSlider.Root>
));
SliderRoot.displayName = "SliderRoot";
