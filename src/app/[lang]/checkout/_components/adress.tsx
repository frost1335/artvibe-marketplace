'use client'

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface ResourcesProps {
    title: string
    city: string
    recieveMethod: string
    mail: string
    courier: string
    zip: string
    street: string
    house: string
    region: string
    apartment: string
    door: string
    comment: string
    commentEg: string
}

export default function Adress({ resources }: { resources: ResourcesProps }) {
    const [deliveryMethod, setDeliveryMethod] = useState<'mail' | 'courier'>('mail')


    return (
        <div className="p-4 border border-zinc-300 dark:border-zinc-500 rounded-md">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">{resources.title}:</h3>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="city-delivery">
                        {resources.city}
                    </Label>
                    <Select>
                        <SelectTrigger value={'almalyk'} id="city-delivery" className="md:w-1/2">
                            <SelectValue placeholder={resources.city} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="almalyk">Almalyk</SelectItem>
                            <SelectItem value="tashkent">Tashkent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city-delivery">
                        {resources.recieveMethod}
                    </Label>

                    <RadioGroup defaultValue={deliveryMethod} value={deliveryMethod} className="space-y-2">
                        <div onClick={() => setDeliveryMethod('mail')} className="flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 md:w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                            <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-magenta" value="mail" id="mail" />
                            <Label htmlFor="mail" className="text-lg cursor-pointer">{resources.mail}</Label>
                        </div>
                        <div onClick={() => setDeliveryMethod('courier')} className="flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 md:w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                            <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-magenta" value="courier" id="courier" />
                            <Label htmlFor="courier" className="text-lg cursor-pointer">{resources.courier}</Label>
                        </div>
                    </RadioGroup>
                </div>

                {
                    deliveryMethod === 'mail' ? (
                        <div className="space-y-4 md:w-1/2">
                            <div className="space-y-2">
                                <Label htmlFor="zip-code">
                                    {resources.zip}
                                </Label>
                                <Input id="zip-code" placeholder="123456" />
                            </div>
                            <div className="flex items-center gap-x-3 w-full">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="street">
                                        {resources.street}
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="house">
                                        {resources.house}
                                    </Label>
                                    <Input id="house" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 md:w-1/2">
                            <div className="space-y-2">
                                <Label htmlFor="region">
                                    {resources.region}
                                </Label>
                                <Input id="region" />
                            </div>
                            <div className="flex items-center gap-x-3 w-full">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="street">
                                        {resources.street}
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="house">
                                        {resources.house}
                                    </Label>
                                    <Input id="house" />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="apartment/office">
                                        {resources.apartment}
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="door">
                                        {resources.door}
                                    </Label>
                                    <Input id="door" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="comment">
                                    {resources.comment}
                                </Label>
                                <Input id="comment" />
                                <p className="text-zinc-400 text-xs">{resources.commentEg}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
