'use client'

import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";
import { usePathname } from "next/navigation";
import { MdArrowBack, MdChevronRight, MdLogout } from "react-icons/md";

const adminLinks = [
    {
        name: "Продукты",
        href: '/admin/products',
    },
    {
        name: "Заказы",
        href: '/admin/orders',
    },
    {
        name: "Категории",
        href: '/admin/categories',
    },
    {
        name: "Пользователи",
        href: '/admin/users',
    },
    {
        name: "Стили продукта",
        href: '/admin/styles',
    },
    {
        name: "Баннеры",
        href: '/admin/banners',
    },
    {
        name: "Отзывы",
        href: '/admin/reviews',
    },

]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="h-full flex flex-col items-start">
            <div>
                <Link href="/">
                    <Button variant={'outline'}>
                        <div className="flex items-center gap-x-3">
                            <MdArrowBack className="text-xl" /> Вернуться в ArtVibe
                        </div>
                    </Button>
                </Link>
            </div>

            <div>
                <ul className="space-y-4 my-10">
                    {adminLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link href={link.href} className={`flex items-center gap-x-2 text-sm ${pathname.startsWith(link.href) && 'font-medium'}`}>
                                {
                                    pathname.startsWith(link.href) && (
                                        <MdChevronRight className="text-xl" />
                                    )
                                }
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <Button variant={'outline'}>
                    <div className="flex items-center gap-x-3">
                        <MdLogout className="text-xl" /> Выйти
                    </div>
                </Button>
            </div>
        </div>
    )
};
