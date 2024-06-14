'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { gallery } from '@/lib/data'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const Gallery = () => {
  const { ref } = useSectionInView('Gallery')
  return (
    <div
      className="flex scroll-mt-28 flex-col items-center p-4"
      id="gallery"
      ref={ref}
    >
      <SectionHeading>My Gallery</SectionHeading>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="mt-6 w-full max-w-[280px] sm:mt-12 sm:max-w-[500px] md:max-w-screen-sm lg:max-w-screen-md"
      >
        <CarouselContent>
          {gallery.length > 0 && (
            <>
              {gallery.map((item, index) => {
                return (
                  <CarouselItem key={item.alt + index}>
                    <div className="p-1">
                      <Card className={cn('border-0 shadow-none')}>
                        <CardContent className="flex justify-center">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            className="rounded-lg"
                            placeholder="blur"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Gallery
