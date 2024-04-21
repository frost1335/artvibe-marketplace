import ProductCard from "@/components/product-card";

export default function Page({ resources }: any) {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1 pb-6 border-b border-b-zinc-400">{resources.wishes.title}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-4 gap-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
};
