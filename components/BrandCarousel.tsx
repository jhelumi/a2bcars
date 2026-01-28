'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function BrandCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselDescriptions = [
    {
      title: 'Airport Transfers',
      description:
        'Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us',
    },
    {
      title: 'Corporate Accounts & Business Travel',
      description:
        'Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us',
    },
    {
      title: 'Long Distance Travel',
      description:
        'Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us',
    },
    {
      title: 'City to City Travel',
      description:
        'Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us',
    },
    {
      title: 'Event & Seasonal Travel',
      description:
        'Travelling to or from the airport should feel simple and stress-free. At A2B Cars, we make sure your journey is calm, comfortable, and on time — every single time. Whether it’s an early-morning departure, a late-night arrival, or a long-haul return, we look after everything carefully from the moment you book with us',
    },
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className={'w-full'}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: carouselDescriptions.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card
                style={{
                  background: 'url(/slider/' + (index + 1) + '.jpg',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                  backgroundPositionY: 'center',
                  backgroundSize: 'cover',
                  width: '100%',
                }}
              >
                <CardContent className="grid grid-flow-row p-2 w-full sm:h-100 md:h-138 ">
                  <span className="text-3xl text-brand-blue font-semibold mb-0">
                    {carouselDescriptions[index].title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
