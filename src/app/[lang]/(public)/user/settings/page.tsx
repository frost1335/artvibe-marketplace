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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PatternFormat } from "react-number-format"

export default function Settings({ resources }: any) {

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            surname: '',
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
                    <div className="flex gap-x-3 flex-wrap gap-y-5">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{resources.user.settings.lastName}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={resources.user.settings.lastName} {...field} />
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
                                    <FormLabel>{resources.user.settings.firstName}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={resources.user.settings.firstName} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{resources.user.settings.surname}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={resources.user.settings.surname} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-x-3 pt-6 flex-wrap gap-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{resources.user.settings.email}</FormLabel>
                                    <FormControl>
                                        <Input type="email" className="w-min" placeholder={resources.user.settings.email} {...field} />
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
                                    <FormLabel>{resources.user.settings.birthDate}</FormLabel>
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
                    <div className="flex gap-x-3 pt-6 flex-wrap gap-y-5">
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>{resources.user.settings.gender}</FormLabel>
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
                                                    {resources.user.settings.male}
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value={UserGender.FEMALE} />
                                                </FormControl>
                                                <FormLabel className="font-normal py-1.5 cursor-pointer">
                                                    {resources.user.settings.female}
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between gap-x-3 pt-6 flex-wrap gap-y-5">
                        <Button size={'lg'} type="button" variant={'secondary'}>
                            {resources.user.settings.logout}
                        </Button>
                        <Button size={'lg'} type="submit">{resources.user.settings.save}</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
};
