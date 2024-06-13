'use client'
import { sitemetadata, socials } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="my-10 px-4 text-center text-gray-500">
      {socials.length > 0 && (
        <ul className="flex justify-center gap-4 py-4 sm:gap-8 sm:py-8">
          {socials.map(platform => {
            const Icon = platform.icon.type
            return (
              <li key={platform.url}>
                <Link href={platform.url} className={cn('block rounded-full')}>
                  <Icon className="h-6 w-6 text-muted-foreground" />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <small className="mb-2 block text-xs">
        &copy; {year} {sitemetadata.footer}
      </small>
    </footer>
  )
}
