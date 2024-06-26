import { Locale } from "@/i18n.config";
import CartPage from "./main";
import { getDictionary } from "@/lib/dictionary";

interface PageProps {
    params: {
        lang: Locale
    },
}

export default async function page({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <>
            <CartPage resources={resources} />
        </>
    )
};
