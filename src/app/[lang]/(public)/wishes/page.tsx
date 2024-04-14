import ProductCard from "@/components/product-card";

export default function page() {
    return (
        <div>
            <div className="container py-8">
                <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1 pb-6 border-b border-b-zinc-400">My wishes</h2>

                <div className="grid grid-cols-4 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
};
