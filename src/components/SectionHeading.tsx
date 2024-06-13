import { cn } from '@/lib/utils'
import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <span
      className={cn(
        'prose mx-auto block dark:prose-invert sm:prose-lg lg:prose-xl xl:prose-2xl',
        className,
      )}
    >
      <h2 className="py-4 text-center text-3xl font-medium capitalize">
        {children}
      </h2>
    </span>
  )
}
