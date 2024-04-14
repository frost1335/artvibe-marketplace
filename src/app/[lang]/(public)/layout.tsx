import Footer from "@/components/footer/footer"
import GoTop from "@/components/go-top"
import Navbar from "@/components/navbar/navbar"
import TopNavbar from "@/components/navbar/top-navbar"

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <TopNavbar />
            <Navbar />
            <GoTop />
            {children}
            <Footer />
        </>
    )
};
