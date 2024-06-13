'use client'
import React from 'react'
import { skills } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { Badge } from './ui/badge'

const Skills = () => {
  const { ref } = useSectionInView('Skills')
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }
  return (
    <section id="skills" ref={ref}>
      <section
        id="skills"
        ref={ref}
        className="mx-auto max-w-screen-md scroll-mt-28 text-center"
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="my-6 flex flex-col justify-center gap-y-5 text-lg text-gray-800 sm:my-12 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Badge className="px-6 py-4">{skill}</Badge>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Skills
