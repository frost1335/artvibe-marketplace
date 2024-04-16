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
        <div className="rounded-2xl overflow-hidden">
            <Carousel opts={{ loop: true }} plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}>
                <CarouselContent>
                    <CarouselItem>
                        <Link href="/product/123">
                            <Image className="w-full aspect-[16/5]" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link href="/product/123">
                            <Image className="w-full aspect-[16/5]" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link href="/product/123">
                            <Image className="w-full aspect-[16/5]" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
                        </Link>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 translate-x-14" />
                <CarouselNext className="h-10 w-10 -translate-x-14" />
            </Carousel>
        </div>
    )
};
