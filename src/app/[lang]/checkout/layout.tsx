import Footer from "@/components/footer/footer"
import GoTop from "@/components/go-top"
import Navbar from "./_components/navbar"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"

interface LayoutProps {
    children: React.ReactNode
    params: {
        lang: Locale
    }
}

export default async function Layout({ children, params: { lang } }: LayoutProps) {
    const resources = await getDictionary(lang)

    return (
        <>
            <Navbar />
            <GoTop />
            {children}
            <Footer resources={resources} />
        </>
    )
};
