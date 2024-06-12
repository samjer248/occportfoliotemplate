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
      className="prose mx-auto mb-28 max-w-screen-sm scroll-mt-28 leading-8 sm:prose-lg lg:prose-xl xl:prose-2xl sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3" dangerouslySetInnerHTML={{ __html: about.text }} />

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
export default About
