'use client'

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
import Link from "next/link"
import LangSwitcher from "./lang-switcher"

export default function TopNavbar({ resources }: { resources: any }) {
    const { setTheme } = useTheme()

    return (
        <nav className="bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="flex items-center justify-between py-1">
                    <div>
                        <Link href="" className="text-sm text-indigo-500 font-medium">
                            {resources.navbar.sellArtvibe}
                        </Link>
                    </div>

                    <div className="gap-x-6 flex items-center">
                        <LangSwitcher />

                        <DropdownMenu>
                            <DropdownMenuTrigger className="h-8" asChild>
                                <Button variant="outline" className="flex items-center gap-x-2 bg-transparent">
                                    <div className="w-[1.2rem] h-[1.2rem] relative">
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute top-0 left-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </div>
                                    <span className="block text-sm text-zinc-700 dark:text-zinc-200">
                                        {resources.navbar.theme}
                                    </span>
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <div className="flex items-center gap-x-2">
                                        <SunIcon />
                                        {resources.navbar.light}
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <div className="flex items-center gap-x-2">
                                        <MoonIcon />
                                        {resources.navbar.dark}
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    <div className="flex items-center gap-x-2">
                                        <WiMoonAltFirstQuarter />
                                        {resources.navbar.system}
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
