import ProductCard from "@/components/product-card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface PageProps {
    params: {
        lang: Locale
    },
}

export default async function page({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">{resources.category.all}</h2>

            <div className="py-6 flex items-center gap-x-2">
                <p>{resources.category.search}:</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={resources.category.filter} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">{resources.category.new}</SelectItem>
                        <SelectItem value="popular">{resources.category.popular}</SelectItem>
                        <SelectItem value="cheap">{resources.category.cheap}</SelectItem>
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

            <div className="py-8">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink isActive href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        {/* <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem> */}
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

        </div>
    )
};
