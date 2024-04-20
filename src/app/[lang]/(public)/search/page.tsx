import ProductCard from "@/components/product-card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Page({ resources }: any) {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">{resources.search.title}</h2>

            <div className="py-6 flex items-center gap-x-2">
                <p>{resources.search.searchby}:</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={resources.search.filter} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">{resources.search.new}</SelectItem>
                        <SelectItem value="popular">{resources.search.popular}</SelectItem>
                        <SelectItem value="cheap">{resources.search.cheap}</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-4 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
};
