import { Portal } from "@ark-ui/react/portal";
import { Select as ArkSelect } from "@ark-ui/react/select";
import * as React from "react";
import { cn } from "../lib/utils";

export const SelectRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkSelect.Root>
>(({ className, ...props }, ref) => (
  <ArkSelect.Root ref={ref} className={className} {...props} />
));
SelectRoot.displayName = "SelectRoot";

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ArkSelect.Trigger>
>(({ className, ...props }, ref) => (
  <ArkSelect.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <ArkSelect.ValueText placeholder="Select an option" />
    <ArkSelect.Indicator>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 opacity-50"
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </ArkSelect.Indicator>
  </ArkSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectPortal = Portal;

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkSelect.Content>
>(({ className, children, ...props }, ref) => (
  <ArkSelect.Positioner>
    <ArkSelect.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </ArkSelect.Content>
  </ArkSelect.Positioner>
));
SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkSelect.Item>
>(({ className, children, ...props }, ref) => (
  <ArkSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ArkSelect.ItemIndicator>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </ArkSelect.ItemIndicator>
    </span>
    <ArkSelect.ItemText>{children}</ArkSelect.ItemText>
  </ArkSelect.Item>
));
SelectItem.displayName = "SelectItem";
