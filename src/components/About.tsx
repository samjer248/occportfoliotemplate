'use client'

import React from 'react'
import { about } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'
import { motion } from 'framer-motion'
// import { useSectionInView } from '@/lib/hooks'

const About = () => {
  // const { ref } = useSectionInView('About')

  return (
    <motion.section
      // ref={ref}
      className="prose mx-auto max-w-screen-sm scroll-mt-28 p-4 leading-8 sm:prose-lg lg:prose-xl xl:prose-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3" dangerouslySetInnerHTML={{ __html: about.text }} />
    </motion.section>
  )
}
export default About
