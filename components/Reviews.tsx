"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {Quote} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ReviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const reviewItems = [
    { name: 'Graeme', photUrl: '#', comments : "I recently used A2B to take my parents to Heathrow. The driver arrived on time, was courteous and professional. The car was spotless and my parents felt Covid secure. We will definitely use A2B again.", stars : 5 },
    { name: 'Joe', photUrl: '#', comments : "Excellent Service", stars : 4 },
    { name: 'Simon', photUrl: '#', comments : "Excellent Service", stars : 3 },
    { name: 'Mike', photUrl: '#', comments : "Excellent Service", stars : 5 },
    { name: 'Sonali', photUrl: '#', comments : "Excellent Service", stars : 2 },
    { name: 'Shafiq', photUrl: '#', comments : "Excellent Service", stars : 1 },
    { name: 'Rahul', photUrl: '#', comments : "Excellent Service", stars : 4 },
    { name: 'Albert', photUrl: '#', comments : "Excellent Service", stars : 5 },
   
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className= {"w-full max-w-xs"}
      
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviewItems.map((item, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="bg-brand-blue ">
                <CardContent className="flex flex-col items-center justify-center p-2 gap-4" >  
                  <span
                    style={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      border: "2px solid #fff",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#555",
                    }}
                      >
                        {item.name[0]}
                    </span>

                  <span className="text-4xl font-semibold text-brand-gray ">
                    {Array.from({ length: item.stars }, () => "★").join("")}
                    </span>
                  <span className="text-xs text-gray-900 text-center font-semibold">{item.comments}</span>                  
                  <span className="text-xl font-semibold">{item.name}</span>
                  <Quote/>
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
