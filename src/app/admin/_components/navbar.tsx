import { LogoMain, LogoPrimary } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import Sidebar from "./sidebar";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HiBars3CenterLeft } from "react-icons/hi2";

export default function Navbar() {
    return (
        <div className="w-full p-4 flex items-center justify-between border-b">
            <div className="md:block hidden">
                <Link href={'/admin'}>
                    <Image className="dark:hidden" src={LogoMain} alt="artvibe-logo" width={60} height={38} />
                    <Image className="hidden dark:block" src={LogoPrimary} alt="artvibe-logo" width={60} height={38} />
                </Link>
            </div>

            <div className="md:hidden flex items-center">
                <Sheet >
                    <SheetTrigger>
                        <HiBars3CenterLeft className="text-3xl" />
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <Sidebar />
                    </SheetContent>
                </Sheet>

            </div>

            <div>
                <Link href={'/admin/account'} className="flex items-center gap-x-2">
                    <FaRegCircleUser className="text-2xl opacity-70" />

                    Аккаунт
                </Link>
            </div>
        </div>
    )
};
