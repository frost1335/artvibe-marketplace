"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { UserGender, userSchema } from "@/schemas/user-info"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PatternFormat } from "react-number-format"

export default function Settings() {

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            sureName: '',
            email: '',
            gender: undefined,
            birthDate: ''
        },
    })

    const onSubmit = () => {

        console.log('on submit');
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 divide-y border rounded-lg p-6">
                    <div className="flex gap-x-3">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Familiya</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Familiya" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ism</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ism" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sureName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Otasining ismi</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Otasining ismi" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-x-3 pt-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Elektron pochta</FormLabel>
                                    <FormControl>
                                        <Input type="email" className="w-min" placeholder="Elektron pochta" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="birthDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-y-2">
                                    <FormLabel>Tug&apos;ilgan sana</FormLabel>
                                    <FormControl>
                                        <PatternFormat
                                            type="text"
                                            format="##/##/####"
                                            mask="_"
                                            {...field}
                                            className='p-2 mb-8 rounded-md border dark:bg-black outline-none text-sm focus-visible:ring-1 focus-visible:ring-zinc-900 focus-visible:dark:ring-zinc-300'
                                            id='email'
                                            placeholder="kk/oo/yyyy"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-x-3 pt-6">
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Jins</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-x-3 mt-5"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value={UserGender.MALE} />
                                                </FormControl>
                                                <FormLabel className="font-normal py-1.5 cursor-pointer">
                                                    Erkak
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value={UserGender.FEMALE} />
                                                </FormControl>
                                                <FormLabel className="font-normal py-1.5 cursor-pointer">
                                                    Ayol
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between gap-x-3 pt-6">
                        <Button size={'lg'} type="button" variant={'secondary'}>
                            Tizimdan chiqish
                        </Button>
                        <Button size={'lg'} type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
};
