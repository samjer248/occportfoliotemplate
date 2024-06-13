'use client'
import { Artifact as ArtifactType } from '@/lib/types'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRef } from 'react'
import { Badge } from './ui/badge'
import { motion, useScroll, useTransform } from 'framer-motion'

interface IndexedArtifactType extends ArtifactType {
  index: number
}

const Artifact = ({
  image,
  title,
  description,
  tags,
  url,
  index,
}: IndexedArtifactType) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="scroll-mt-28 p-4"
    >
      <Card
        className={cn(
          'group relative min-h-[300px] overflow-hidden bg-primary text-background',
          {
            'bg-secondary text-foreground': index % 2 === 0,
          },
        )}
      >
        <CardHeader
          className={cn(
            'prose flex flex-row justify-center dark:prose-invert sm:justify-start',
            {
              'sm:justify-end': index % 2 === 1,
            },
          )}
        >
          <CardTitle
            className={cn('sm:w-1/2', { 'text-muted': index % 2 === 1 })}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className={cn('prose flex dark:prose-invert', {
            'justify-end': index % 2 === 1,
          })}
        >
          <p
            className={cn('prose-sm sm:w-1/2', {
              'text-background': index % 2 === 1,
            })}
          >
            {description}
          </p>
        </CardContent>
        <CardFooter
          className={cn('flex flex-col flex-wrap gap-4 sm:w-1/2 sm:flex-row', {
            'sm:ml-auto': index % 2 === 1,
          })}
        >
          {tags.length && (
            <>
              {tags.map((tag, i) => {
                return (
                  <Badge
                    key={tag + i}
                    variant={index % 2 === 0 ? 'default' : 'secondary'}
                  >
                    {tag}
                  </Badge>
                )
              })}
            </>
          )}
        </CardFooter>
        {image && (
          <Image
            src={image}
            alt=""
            className={cn(
              'absolute -right-[60%] top-4 hidden rounded-t-lg transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] sm:block',
              {
                '-left-[60%] right-auto group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2':
                  index % 2 === 1,
              },
            )}
          />
        )}
      </Card>
    </motion.div>
  )
}

export default Artifact
