import PopularProducts from "@/components/popular-products";
import CategoryPage from "./[slug]/page";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface PageProps {
    params: {
        lang: Locale
    },
}

export default async function layout({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div>
            <CategoryPage resources={resources} />
            <PopularProducts resources={resources} />
        </div>
    )
};
