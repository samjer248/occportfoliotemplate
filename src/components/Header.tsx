'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full border border-white border-opacity-40 bg-background shadow backdrop-blur-md dark:border-muted sm:top-6 sm:w-[38rem] sm:rounded-full sm:bg-background/80"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-[4.5rem] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
        {links.length > 0 && (
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-foreground sm:w-[initial] sm:flex-nowrap sm:gap-3">
            {links.map((link, index) => {
              return (
                <motion.li
                  className="relative flex h-3/4 items-center justify-center"
                  key={link.hash + index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <Link
                    className={cn(
                      'transition-color flex w-full items-center justify-center px-3 py-3 text-xs hover:text-gray-950 dark:hover:text-muted-foreground sm:text-sm',
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name)
                      setTimeOfLastClick(Date.now())
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-muted"
                        layoutId="activeSelection"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
