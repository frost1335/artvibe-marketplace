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
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function page() {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">Hoodies</h2>

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
