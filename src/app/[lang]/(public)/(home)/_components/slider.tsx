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
import Link from "@/components/ui/link"

export default function Slider() {
    return (
        <div className="rounded-2xl lg:overflow-hidden">
            <Carousel opts={{ loop: true }} plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}>
                <CarouselContent>
                    {[1, 2, 3, 4].map((slide, index) => (
                        <CarouselItem key={index}>
                            <Link href="/product/123">
                                <Image className="rounded-2xl overflow-hidden w-full md:aspect-[16/5] aspect-[16/7] object-cover object-center" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 translate-x-14 hidden md:flex" />
                <CarouselNext className="h-10 w-10 -translate-x-14 hidden md:flex" />
            </Carousel>
        </div>
    )
};
