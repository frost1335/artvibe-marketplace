import Footer from "@/components/footer/footer"
import GoTop from "@/components/go-top"
import BottomNavbar from "@/components/navbar/bottom-navbar"
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
        <div className="overflow-hidden fixed top-0 left-0 right-0 bottom-0 flex flex-col">
            <div className="overflow-auto">
                <div className="hidden lg:block">
                    <TopNavbar resources={resources} />
                </div>

                <Navbar resources={resources} />

                <div className="hidden md:block">
                    <GoTop />
                </div>

                {children}
                <Footer resources={resources} />
            </div>

            <div className="lg:hidden">
                <BottomNavbar resources={resources} />
            </div>
        </div>
    )
};
