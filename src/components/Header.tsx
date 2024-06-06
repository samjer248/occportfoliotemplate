'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-12 w-full border border-white border-opacity-40 bg-white/50 shadow backdrop-blur sm:top-6 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        {links.length > 0 && (
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
                    className="transition-color flex w-full items-center justify-center px-3 py-3 hover:text-gray-950"
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
