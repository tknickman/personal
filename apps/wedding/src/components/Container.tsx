import { ReactNode } from 'react'
import clsx from 'clsx'

export function Container({
  className,
  ...props
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
