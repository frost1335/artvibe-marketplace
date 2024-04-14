'use client'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Slider() {
    return (
        <Carousel opts={{ loop: true }} plugins={[
            Autoplay({
                delay: 4000,
            }),
        ]}>
            <CarouselContent>
                <CarouselItem>
                    <Image className="w-full aspect-[16/5] rounded-2xl" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                </CarouselItem>
                <CarouselItem>
                    <Image className="w-full aspect-[16/5] rounded-2xl" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                </CarouselItem>
                <CarouselItem>
                    <Image className="w-full aspect-[16/5] rounded-2xl" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 translate-x-14" />
            <CarouselNext className="h-10 w-10 -translate-x-14" />
        </Carousel>
    )
};
