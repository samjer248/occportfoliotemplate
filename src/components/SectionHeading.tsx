import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <span className="prose dark:prose-invert sm:prose-lg lg:prose-xl xl:prose-2xl">
      <h2 className="py-4 text-center text-3xl font-medium capitalize">
        {children}
      </h2>
    </span>
  )
}
