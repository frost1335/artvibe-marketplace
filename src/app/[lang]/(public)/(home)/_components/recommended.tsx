import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function Recommended({ resources }: { resources: any }) {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6">{resources.home.recommend}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-4 gap-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="my-4 md:my-8 flex justify-center">
                <Button className="max-w-lg w-full" size={'lg'} variant={'outline'}>
                    {resources.home.more}
                </Button>
            </div>
        </div>
    )
};
