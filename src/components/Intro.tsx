'use client'
import Image from 'next/image'
import { intro } from '@/lib/data'
import { MotionConfig, motion } from 'framer-motion'

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={intro.portraitAlt}
              width={250}
              height={250}
              quality={90}
              priority
              className="h-32 w-32 rounded-full border-2 border-background object-cover shadow"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {intro.emoji}
          </motion.span>
        </div>
      </div>
      <p
        className="prose sm:prose-lg lg:prose-xl xl:prose-2xl mx-auto max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: intro.description }}
      ></p>
    </section>
  )
}

export default Intro
