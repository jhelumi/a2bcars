"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function BrandCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const carouselDescriptions = [
    { "title": "Airport Tanasfers",
      "description" : "Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us"
    },

    { "title": "Business Travel",
      "description" : "Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us" 
    },
    { "title": "Corporate Accounts Travel",
      "description" : "Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us"
    },

    { "title": "Long Distance Travel",
      "description" : "Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us" 
    }    
  ]
  return (
    <Carousel
      plugins={[plugin.current]}
      className= {"w-full"}
      
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: carouselDescriptions.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card style={{background: 'url(/slider/' + (index+1) + '.jpg'}}>
                <CardContent className="flex  p-2 w-full h-138" >                    
                  <span className="text-xl text-brand-blue font-semibold">{carouselDescriptions[index].title}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
