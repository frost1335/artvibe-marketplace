import Banner from "./_components/banner";
import Header from "./_components/header";
import LowPrice from "./_components/low-price";
import NewProducts from "./_components/new-products";
import Recommended from "./_components/recommended";

export default function Home() {
    return (
        <div>
            <Header />
            <Recommended />
            <LowPrice />
            <Banner />
            <NewProducts />
        </div>
    )
};
