import Footer from "@/components/footer/footer"
import GoTop from "@/components/go-top"
import Navbar from "@/components/navbar/navbar"
import TopNavbar from "@/components/navbar/top-navbar"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"

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
            <TopNavbar resources={resources} />
            <Navbar resources={resources} />
            <GoTop />
            {children}
            <Footer resources={resources} />
        </>
    )
};
