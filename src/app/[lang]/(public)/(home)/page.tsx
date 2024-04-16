import { getDictionary } from "@/lib/dictionary";
import Banner from "./_components/banner";
import Header from "./_components/header";
import LowPrice from "./_components/low-price";
import NewProducts from "./_components/new-products";
import Recommended from "./_components/recommended";
import { Locale } from "@/i18n.config";

export default async function Home({ params: { lang } }: {
    params: {
        lang: Locale
    }
}) {
    const resorces = await getDictionary(lang)

    return (
        <div>
            <Header />
            <Recommended resorces={resorces} />
            <LowPrice resorces={resorces} />
            <Banner />
            <NewProducts resorces={resorces} />
        </div>
    )
};
