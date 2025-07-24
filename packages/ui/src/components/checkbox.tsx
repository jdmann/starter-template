import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import * as React from "react";
import { cn } from "../lib/utils";

export const CheckboxRoot = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof ArkCheckbox.Root>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Root
    ref={ref}
    className={cn("flex items-center space-x-2", className)}
    {...props}
  >
    <ArkCheckbox.Control className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50">
      <ArkCheckbox.Indicator asChild>
        {/* Render checkmark for checked, bar for indeterminate, nothing for unchecked */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
        >
          <g data-state="checked">
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
          <g data-state="indeterminate">
            <rect
              x="3"
              y="7"
              width="9"
              height="1.5"
              rx="0.75"
              fill="currentColor"
            />
          </g>
        </svg>
      </ArkCheckbox.Indicator>
    </ArkCheckbox.Control>
    <ArkCheckbox.HiddenInput />
  </ArkCheckbox.Root>
));
CheckboxRoot.displayName = "CheckboxRoot";
