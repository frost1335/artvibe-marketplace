'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { English, Russian, Uzbek } from "@/assets"
import Image from "next/image"
import { useParams, usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";

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

export default function LangSwitcher() {
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
        <Select onValueChange={onChangeLang} value={lang as string}>
            <SelectTrigger className="w-[180px] h-8">
                <SelectValue placeholder="Lang" />
            </SelectTrigger>
            <SelectContent>
                {
                    langs.map((lang, idx) => (
                        <SelectItem onClick={() => onChangeLang(lang.locale)} key={idx} value={lang.locale}>
                            <div className="flex items-center gap-x-2">
                                {lang.icon}
                                {lang.name}
                            </div>
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
};
