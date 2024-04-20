import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function NewProducts({ resources }: { resources: any }) {
    return (
        <div className="container py-8">
            <Link href="/category/new-products">
                <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">{resources.home.new} <GoChevronRight className="mt-0.5" /></h2>
            </Link>

            <div className="grid grid-cols-4 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="my-8 flex justify-center">
                <Button className="max-w-lg w-full" size={'lg'} variant={'outline'}>
                    {resources.home.more}
                </Button>
            </div>
        </div>
    )
};
