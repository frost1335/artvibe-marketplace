import PopularProducts from "@/components/popular-products";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface PageProps {
    children: React.ReactNode
    params: {
        lang: Locale
    },
}

export default async function layout({ children, params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div>
            {children}
            <PopularProducts resources={resources} />
        </div>
    )
};
