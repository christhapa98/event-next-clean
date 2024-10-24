"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/common/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

export default function BannerAdslider() {

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            // className="w-full pt-4"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent >
                <CarouselItem>
                    <Image className='object-cover w-full h-[200px]' src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} width={200} height={200} alt='' />
                </CarouselItem>
                <CarouselItem>
                    <Image className='object-cover w-full h-[200px]' src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} width={200} height={200} alt='' />
                </CarouselItem>
                <CarouselItem>
                    <Image className='object-cover w-full h-[200px]' src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} width={200} height={200} alt='' />
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}
