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

export default function Adress() {
    const [deliveryMethod, setDeliveryMethod] = useState<'mail' | 'courier'>('mail')


    return (
        <div className="p-4 border border-zinc-300 dark:border-zinc-500 rounded-md">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">Delivery method and adress:</h3>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="city-delivery">
                        City to deliver
                    </Label>
                    <Select>
                        <SelectTrigger value={'almalyk'} id="city-delivery" className="w-1/2">
                            <SelectValue placeholder="City to deliver" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="almalyk">Almalyk</SelectItem>
                            <SelectItem value="tashkent">Tashkent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city-delivery">
                        Recieve method
                    </Label>

                    <RadioGroup defaultValue={deliveryMethod} value={deliveryMethod} className="space-y-2">
                        <div onClick={() => setDeliveryMethod('mail')} className="flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                            <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-indigo-600" value="mail" id="mail" />
                            <Label htmlFor="mail" className="text-lg cursor-pointer">Through a mail</Label>
                        </div>
                        <div onClick={() => setDeliveryMethod('courier')} className="flex items-center space-x-4 bg-zinc-100 dark:bg-zinc-800 w-1/2 px-4 py-3 rounded-lg cursor-pointer">
                            <RadioGroupItem className="w-5 h-5 scale-125 text-xl text-indigo-600" value="courier" id="courier" />
                            <Label htmlFor="courier" className="text-lg cursor-pointer">Courier to door</Label>
                        </div>
                    </RadioGroup>
                </div>

                {
                    deliveryMethod === 'mail' ? (
                        <div className="space-y-4 w-1/2">
                            <div className="space-y-2">
                                <Label htmlFor="zip-code">
                                    Zip code
                                </Label>
                                <Input id="zip-code" placeholder="123456" />
                            </div>
                            <div className="flex items-center gap-x-3 w-full">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="street">
                                        Street
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="house">
                                        House
                                    </Label>
                                    <Input id="house" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 w-1/2">
                            <div className="space-y-2">
                                <Label htmlFor="region">
                                    Region
                                </Label>
                                <Input id="region" />
                            </div>
                            <div className="flex items-center gap-x-3 w-full">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="street">
                                        Street
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="house">
                                        House
                                    </Label>
                                    <Input id="house" />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="apartment/office">
                                        Apartment/office
                                    </Label>
                                    <Input id="street" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <Label htmlFor="door">
                                        Door
                                    </Label>
                                    <Input id="door" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="comment">
                                    Comment for the courier
                                </Label>
                                <Input id="comment" />
                                <p className="text-zinc-400 text-xs">For example, where exactly to deliver the order, the nearest address or landmark</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
