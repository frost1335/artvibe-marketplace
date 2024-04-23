'use client'

import { English, Russian, Uzbek } from "@/assets";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Locale } from "@/i18n.config";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface ILanguage {
    name: string, locale: Locale, icon: React.ReactNode
}

const langs: ILanguage[] = [
    {
        name: "O'zbekcha",
        locale: 'uz',
        icon: <Image className="w-5 h-5 rounded-full" src={Uzbek} alt="lang-image" width={30} height={30} />
    },

    {
        name: 'Русский',
        locale: 'ru',
        icon: <Image className="w-5 h-5 rounded-full" src={Russian} alt="lang-image" width={30} height={30} />
    },
    {
        name: 'English',
        locale: 'en',
        icon: <Image className="w-5 h-5 rounded-full" src={English} alt="lang-image" width={30} height={30} />
    },
]


export default function LangSwitcher({ resources }: any) {
    const { lang } = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const redirectedPathName = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    const onChangeLang = (locale: Locale) => {
        try {
            localStorage.setItem('selectLocale', locale)
            router.push(redirectedPathName(locale))
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant={'outline'} size={'lg'} asChild>
                    <div className="flex items-center gap-x-2">
                        {langs.find((l => lang === l.locale))?.icon}
                        {langs.find((l => lang === l.locale))?.name}
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{resources.user.chooseLang}</DrawerTitle>
                </DrawerHeader>
                <div className="py-4 space-y-3">
                    {langs.map((lang, idx) => (
                        <DrawerClose className="w-full" key={idx}>
                            <Button variant={'outline'} onClick={() => onChangeLang(lang.locale)} className="w-full h-14" size={'lg'} asChild>
                                <div className="flex items-center gap-x-2">
                                    {lang.icon}
                                    {lang.name}
                                </div>
                            </Button>
                        </DrawerClose>
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    )
};
