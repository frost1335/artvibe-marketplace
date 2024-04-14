import ProductCard from "@/components/product-card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function page() {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">Results of search</h2>

            <div className="py-6 flex items-center gap-x-2">
                <p>Search by:</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Search by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">Popular</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="cheap">Cheap</SelectItem>
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
