'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

interface ResourcesProps {
    title: string
    firstName: string
    lastName: string
    notify: string
    phone: string
}

export default function Recipient({ resources }: { resources: ResourcesProps }) {
    const [phone, setPhone] = useState('')

    return (
        <div className="p-4 border border-zinc-300 dark:border-zinc-500 rounded-md">
            <h3 className="text-xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">{resources.title}:</h3>

            <div className="space-y-6">
                <div className="space-y-4 md:w-1/2">
                    <div className="flex items-center gap-x-3 w-full">
                        <div className="space-y-2 w-full">
                            <Label htmlFor="first-name">
                                {resources.firstName} <span className="text-magenta">*</span>
                            </Label>
                            <Input id="first-name" />
                        </div>
                        <div className="space-y-2 w-full">
                            <Label htmlFor="last-name">
                                {resources.lastName} <span className="text-magenta">*</span>
                            </Label>
                            <Input id="last-name" />
                        </div>
                    </div>

                </div>
                <p className="md:w-2/3 md:text-sm text-xs text-zinc-500">{resources.notify}</p>
                <div className="md:w-1/2 space-y-2">
                    <Label htmlFor="phone">
                        {resources.phone} <span className="text-magenta">*</span>
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
