'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

export default function Recipient() {
    const [phone, setPhone] = useState('')

    return (
        <div className="p-4 border border-zinc-300 dark:border-zinc-500 rounded-md">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">Recipient of the order:</h3>

            <div className="space-y-6">
                <div className="space-y-4 w-1/2">
                    <div className="flex items-center gap-x-3 w-full">
                        <div className="space-y-2 w-full">
                            <Label htmlFor="first-name">
                                First name <span className="text-indigo-600">*</span>
                            </Label>
                            <Input id="first-name" />
                        </div>
                        <div className="space-y-2 w-full">
                            <Label htmlFor="last-name">
                                Last name <span className="text-indigo-600">*</span>
                            </Label>
                            <Input id="last-name" />
                        </div>
                    </div>

                </div>
                <p className="w-2/3 text-sm text-zinc-500">Мы пришлем уведомление о статусе заказа на указанный вами телефон.
                    Курьер свяжется с вами по телефону для уточнения времени доставки.</p>
                <div className="w-1/2 space-y-2">
                    <Label htmlFor="phone">
                        Phone number <span className="text-indigo-600">*</span>
                    </Label>
                    <PatternFormat
                        value={phone}
                        type="tel"
                        format="+998 ## ### ##-##"
                        mask="_"
                        onValueChange={(value: any) => setPhone(value.value)}
                        required
                        className='w-full p-2 mb-8 rounded-md border dark:bg-black outline-none text-sm focus-visible:ring-1 focus-visible:ring-zinc-900 focus-visible:dark:ring-zinc-300'
                        name='phone'
                        id='phone'
                        placeholder="+998"
                    />
                </div>
            </div>
        </div>
    )
};
