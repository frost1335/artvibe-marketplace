import PopularProducts from "@/components/popular-products";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SearchPage from "./page";

interface PageProps {
    params: {
        lang: Locale
    },
    children: React.ReactNode,
}

export default async function layout({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div>
            <SearchPage resources={resources} />
            <PopularProducts resources={resources} />
        </div>
    )
};
