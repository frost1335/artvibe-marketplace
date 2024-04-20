import { Locale } from "@/i18n.config"
import SettingsPage from "./page"
import { getDictionary } from "@/lib/dictionary"

interface PageProps {
    params: {
        lang: Locale
    }
}

export default async function layout({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <>
            <SettingsPage resources={resources} />
        </>
    )
};
