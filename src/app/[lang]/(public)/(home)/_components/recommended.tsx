import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function Recommended() {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6">Recommended</h2>

            <div className="grid grid-cols-4 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="my-8 flex justify-center">
                <Button className="max-w-lg w-full" size={'lg'} variant={'outline'}>
                    Show more
                </Button>
            </div>
        </div>
    )
};
