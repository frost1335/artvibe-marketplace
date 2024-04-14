'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { WiMoonAltFirstQuarter } from "react-icons/wi";

import { useTheme } from "next-themes"
import Image from "next/image"
import { English, Russian, Uzbek } from "@/assets"
import Link from "next/link"

export default function TopNavbar() {
    const { setTheme } = useTheme()

    return (
        <nav className="bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="flex items-center justify-between py-1">
                    <div>
                        <Link href="/uz" className="text-sm text-indigo-500 font-medium">
                            Sell with ArtVibe
                        </Link>
                    </div>

                    <div className="gap-x-6 flex items-center">
                        <Select value="uz">
                            <SelectTrigger className="w-[180px] h-8">
                                <SelectValue placeholder="Lang" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="uz">
                                    <div className="flex items-center gap-x-2">
                                        <Image className="w-5 h-5 rounded-full" src={Uzbek} alt="lang-image" width={30} height={30} />
                                        O&apos;zbekcha
                                    </div>
                                </SelectItem>
                                <SelectItem value="ru">
                                    <div className="flex items-center gap-x-2">
                                        <Image className="w-5 h-5 rounded-full" src={Russian} alt="lang-image" width={30} height={30} />
                                        Русский
                                    </div>
                                </SelectItem>
                                <SelectItem value="en">
                                    <div className="flex items-center gap-x-2">
                                        <Image className="w-5 h-5 rounded-full" src={English} alt="lang-image" width={30} height={30} />
                                        English
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="h-8" asChild>
                                <Button variant="outline" className="flex items-center gap-x-2 bg-transparent">
                                    <div className="w-[1.2rem] h-[1.2rem] relative">
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute top-0 left-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </div>
                                    <span className="block text-sm text-zinc-700 dark:text-zinc-200">
                                        Theme
                                    </span>
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <div className="flex items-center gap-x-2">
                                        <SunIcon />
                                        Light
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <div className="flex items-center gap-x-2">
                                        <MoonIcon />
                                        Dark
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    <div className="flex items-center gap-x-2">
                                        <WiMoonAltFirstQuarter />
                                        System
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
};
