'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full border border-white border-opacity-40 bg-white/80 shadow backdrop-blur-md dark:border-muted dark:bg-background/80 sm:top-6 sm:w-[38rem] sm:rounded-full"
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
                  className="flex h-3/4 items-center justify-center"
                  key={link.hash + index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <Link
                    className="transition-color flex w-full items-center justify-center px-3 py-3 text-xs hover:text-gray-950 sm:text-sm"
                    href={link.hash}
                  >
                    {link.name}
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
