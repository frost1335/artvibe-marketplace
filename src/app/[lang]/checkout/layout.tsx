import Footer from "@/components/footer/footer"
import GoTop from "@/components/go-top"
import Navbar from "./_components/navbar"

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <GoTop />
            {children}
            <Footer />
        </>
    )
};
