import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { Portal } from '@ark-ui/react/portal'
import * as React from 'react'
import { cn } from '../lib/utils'

export const Popover = ArkPopover.Root

export const PopoverTrigger = ArkPopover.Trigger

export const PopoverPortal = Portal

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkPopover.Content>
>(({ className, ...props }, ref) => (
  <ArkPopover.Positioner>
    <ArkPopover.Content
      ref={ref}
      className={cn(
        'z-50 w-72 rounded-md border border-gray-200 bg-white p-4 text-gray-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className
      )}
      {...props}
    />
  </ArkPopover.Positioner>
))
PopoverContent.displayName = 'PopoverContent'
