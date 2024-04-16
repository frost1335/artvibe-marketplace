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
    const resorces = await getDictionary(lang)

    return (
        <>
            <TopNavbar resorces={resorces} />
            <Navbar resorces={resorces} />
            <GoTop />
            {children}
            <Footer resorces={resorces} />
        </>
    )
};
