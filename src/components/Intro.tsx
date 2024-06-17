'use client'
import Image from 'next/image'
import { intro } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <section className="scroll-mt-36 p-4" id="home" ref={ref}>
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
              src={intro.portrait}
              alt={intro.portraitAlt}
              width={250}
              height={250}
              quality={90}
              priority
              className="h-32 w-32 rounded-full border-2 border-background object-cover shadow"
            />
          </motion.div>
          {intro.emoji && (
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
          )}
        </div>
      </div>
      <motion.div
        className="prose mx-auto max-w-screen-sm py-3 dark:prose-invert sm:prose-lg lg:prose-xl xl:prose-2xl prose-h1:text-xl prose-h1:font-semibold sm:py-10 prose-h1:sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 dangerouslySetInnerHTML={{ __html: intro.description }} />
      </motion.div>
      <div>
        {intro.buttons.length > 0 && (
          <motion.ul
            className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {intro.buttons.map((button, index) => {
              return (
                <li key={button.link + index}>
                  <Link
                    href={button.link}
                    className={cn(
                      buttonVariants({ variant: button.style || 'default' }),
                    )}
                    aria-label={button.alt}
                  >
                    {button.label}
                    {button.icon && (
                      <span
                        className={cn('ml-4', {
                          'ml-0': button.icon && !button.label,
                        })}
                      >
                        {button.icon}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </div>
    </section>
  )
}

export default Intro
