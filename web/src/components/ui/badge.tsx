import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends ComponentProps<'span'> {
  children: React.ReactNode
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'rounded-lg border border-zinc-600 bg-zinc-800 px-3 py-1 font-mono font-semibold text-sm text-zinc-100',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
