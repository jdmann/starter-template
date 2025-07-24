import { ark } from '@ark-ui/react/factory'
import * as React from 'react'
import { cn } from '../lib/utils'

export interface ButtonProps extends React.ComponentPropsWithoutRef<typeof ark.button> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
    ghost: 'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
  },
  sizes: {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  },
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <ark.button
        ref={ref}
        className={cn(
          buttonStyles.base,
          buttonStyles.variants[variant],
          buttonStyles.sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
