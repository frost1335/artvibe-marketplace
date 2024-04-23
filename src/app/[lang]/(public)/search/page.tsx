import ProductCard from "@/components/product-card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import SearchPlaceholder from "./_components/search-placeholder";

export default function Page({ resources }: any) {

    return (
        <div className="container py-8">
            <div className="mb-6">
                <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1">{resources.search.title}:</h2>
                <SearchPlaceholder />
            </div>

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-4 gap-2">
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
