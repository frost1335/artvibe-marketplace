import ProductCard from "@/components/product-card";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function LowPrice() {
    return (
        <div className="container py-8">
            <Link href="/category/low-price">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">Low price <GoChevronRight className="mt-0.5" /></h2>
            </Link>

            <div className="grid grid-cols-4 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
};
