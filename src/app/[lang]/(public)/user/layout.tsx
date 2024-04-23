import LangSwitcher from "@/components/cabinet/lang-switcher";
import ThemeSwitcher from "@/components/cabinet/theme-switcher";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { RiSettings4Line, RiShoppingBag3Line } from "react-icons/ri";

interface PageProps {
    params: {
        lang: Locale
    },
    children: React.ReactNode
}

export default async function layout({ children, params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div className="container py-8">
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">Dilrozbek</h2>
                <div className="lg:hidden flex flex-col items-end gap-y-3">
                    <LangSwitcher resources={resources} />
                    <ThemeSwitcher resources={resources} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-x-10">
                <div>
                    <ul className="flex flex-row gap-4 md:flex-col">
                        <li>
                            <Link className="px-2 py-3 opacity-80 hover:opacity-100 flex items-center gap-x-2" href={'/uz/user/orders'}>
                                <RiShoppingBag3Line className="text-lg" /> {resources.user.orders.title}
                            </Link>
                        </li>
                        <li>
                            <Link className="px-2 py-3 opacity-80 hover:opacity-100 flex items-center gap-x-2" href={'/uz/user/settings'}>
                                <RiSettings4Line className="text-xl" /> {resources.user.settings.title}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
};
