import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import * as React from "react";
import { cn } from "../lib/utils";

export const AccordionRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.Root>
>(({ className, ...props }, ref) => (
  <ArkAccordion.Root ref={ref} className={cn("w-full", className)} {...props} />
));
AccordionRoot.displayName = "AccordionRoot";

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.Item>
>(({ className, ...props }, ref) => (
  <ArkAccordion.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <ArkAccordion.ItemTrigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    {children}
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 shrink-0 transition-transform duration-200"
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </ArkAccordion.ItemTrigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemContent>
>(({ className, ...props }, ref) => (
  <ArkAccordion.ItemContent
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{props.children}</div>
  </ArkAccordion.ItemContent>
));
AccordionContent.displayName = "AccordionContent";

// Remove the Accordion namespace export from this file for best practice Fast Refresh compatibility
