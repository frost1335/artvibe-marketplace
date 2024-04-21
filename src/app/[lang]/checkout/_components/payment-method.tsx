'use client'

import { base64CardImages } from "@/app/constants/images"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { useState } from "react"

interface ResourcesProps {
    title: string
    byCard: string
    cash: string
    payCourier: string
}

export default function PaymentMethod({ resources }: { resources: ResourcesProps }) {
    const [paymentMethod, setPatmentMethod] = useState<'card' | 'cash'>('card')

    return (
        <div className="p-4 border border-zinc-300 dark:border-zinc-500 rounded-md">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">{resources.title}</h3>

            <RadioGroup defaultValue={paymentMethod} value={paymentMethod} className="space-y-2">
                <div onClick={() => setPatmentMethod('card')} className="space-x-4 bg-zinc-100 dark:bg-zinc-800 w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-x-4">
                        <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-magenta" value="card" id="card" />
                        <div>
                            <Label htmlFor="card" className="text-base cursor-pointer">{resources.byCard}</Label>
                            <p className="text-xs text-zinc-500">UZCARD, HUMO, Visa, MasterCard</p>
                            <div className="flex items-center gap-x-2">
                                {base64CardImages.map((image, index) => (
                                    <Image key={index} src={image} width={44} height={44} alt="card-img" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => setPatmentMethod('cash')} className="flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-x-4">
                        <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-magenta" value="cash" id="cash" />
                        <div>
                            <Label htmlFor="cash" className="text-base cursor-pointer">{resources.cash}</Label>
                            <p className="text-xs text-zinc-500">{resources.payCourier}</p>
                        </div>
                    </div>
                </div>
            </RadioGroup>
        </div>
    )
};
