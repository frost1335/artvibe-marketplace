'use client'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { WiMoonAltFirstQuarter } from "react-icons/wi"
import { useLayoutEffect, useState } from "react"


export default function ThemeSwitcher({ resources }: any) {
    const { setTheme, theme } = useTheme()
    const [themeContent, setThemeContent] = useState<string | undefined>('light')

    useLayoutEffect(() => {
        setThemeContent(theme)
    }, [theme])

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant={'outline'} size={'lg'} asChild>
                    <div>
                        <div className={`items-center gap-x-2 ${themeContent == 'light' ? 'flex' : 'hidden'}`}>
                            <SunIcon className="text-xl w-5 h-5" />

                            {resources.navbar.light}
                        </div>
                        <div className={`items-center gap-x-2 ${themeContent == 'dark' ? 'flex' : 'hidden'}`}>
                            <MoonIcon className="text-xl w-5 h-5" />

                            {resources.navbar.dark}
                        </div>
                        <div className={`items-center gap-x-2 ${themeContent == 'system' ? 'flex' : 'hidden'}`}>
                            <WiMoonAltFirstQuarter className="text-xl w-5 h-5" />

                            {resources.navbar.system}
                        </div>
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{resources.navbar.theme}</DrawerTitle>
                </DrawerHeader>
                <div className="py-4 space-y-3">
                    <DrawerClose className="w-full">
                        <Button variant={'outline'} onClick={() => setTheme("light")} className="w-full h-14" size={'lg'} asChild>
                            <div className="flex items-center gap-x-2">
                                <SunIcon className="text-xl w-5 h-5" />
                                {resources.navbar.light}
                            </div>
                        </Button>
                    </DrawerClose>
                    <DrawerClose className="w-full">
                        <Button variant={'outline'} onClick={() => setTheme("dark")} className="w-full h-14" size={'lg'} asChild>
                            <div className="flex items-center gap-x-2">
                                <MoonIcon className="text-xl w-5 h-5" />
                                {resources.navbar.dark}
                            </div>
                        </Button>
                    </DrawerClose>
                    <DrawerClose className="w-full">
                        <Button variant={'outline'} onClick={() => setTheme("system")} className="w-full h-14" size={'lg'} asChild>
                            <div className="flex items-center gap-x-2">
                                <WiMoonAltFirstQuarter className="text-xl w-5 h-5" />
                                {resources.navbar.system}
                            </div>
                        </Button>
                    </DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    )
};
