'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "@/components/ui/link"
import { Button } from "./ui/button"
import { FaFire } from "react-icons/fa6"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io"
import { BsCartPlus } from "react-icons/bs"
import { useParams } from "next/navigation"

export default function ProductCard() {
    const { lang } = useParams()

    const review = lang === 'uz' ? 'ta sharh' : (
        lang === 'en' ? "review" : 'отзыв'
    )

    console.log('test');

    return (
        <Link href={'/product/123'}>
            <Card className="hover:shadow-md hover:dark:shadow-zinc-700 border-none transition-all">
                <CardHeader className="p-0 pb-2 md:pb-4 relative space-y-0">
                    <CardTitle className="sr-only">Beatiful T-shirt - Basketball</CardTitle>
                    <Button className="w-8 h-8 md:w-9 md:h-9 absolute top-2 right-2 z-[15] hover:dark:bg-zinc-200" onClick={(e) => e.preventDefault()} size={'icon'} variant={'ghost'}>
                        {
                            Math.random() > 0.5 ? (
                                <IoIosHeartEmpty className="text-xl text-zinc-700" />
                            ) : (
                                <IoIosHeart className="text-xl text-zinc-700" />
                            )
                        }
                    </Button>
                    <div className="rounded-md overflow-hidden z-[5]">
                        <Image className="w-full aspect-square object-cover" src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="product-img" width={180} height={240} />
                    </div>
                    <div className="rounded-md overflow-hidden absolute top-0 right-0 left-0 z-10 opacity-0 hover:opacity-100 transition">
                        <Image className="w-full aspect-square object-cover" src={'https://dynamic.bonfireassets.com/thumb/design-image/e8fbafd7-05ba-4214-b613-b590fbb0fa5c/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="product-img" width={180} height={240} />
                    </div>
                </CardHeader >
                <CardContent className="p-2 md:p-4 pt-0">
                    <p className="text-zinc-700 dark:text-zinc-300 font-medium text-center text-sm md:text-base">Beatiful T-shirt - Basketball</p>
                    <div className="py-2 flex items-center justify-center gap-x-1 text-sm md:text-base">
                        <FaFire className="text-orange-500" />
                        <h6>5.0 (6 {review})</h6>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                        <span className="block w-4 h-4 rounded-full bg-gray-600" />
                        <span className="block w-4 h-4 rounded-full bg-magenta" />
                    </div>
                </CardContent>
                <CardFooter className="p-2 md:p-4 pt-0 flex items-center justify-between">
                    <h4 className="font-semibold font-mono text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                        22 000 So&apos;m
                    </h4>

                    <Button className="w-8 h-8 md:w-9 md:h-9" onClick={(e) => e.preventDefault()} size={'icon'} variant={'outline'}>
                        <BsCartPlus className="text-base md:text-xl" />
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
};
