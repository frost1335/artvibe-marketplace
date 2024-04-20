import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { FcGallery } from "react-icons/fc";

import { GrCatalog } from "react-icons/gr";
import { GoChevronRight } from "react-icons/go";
import Link from "@/components/ui/link";

export default function Catalog({ resources }: { resources: any }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'secondary'} className="hover:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-700/50">
                    <div className="flex items-center gap-x-3">
                        <GrCatalog className="text-lg" />
                        {resources.navbar.catalog}
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader>
                    <SheetTitle>{resources.navbar.categories}</SheetTitle>
                </SheetHeader>

                <div className="py-6">
                    <ul className="space-y-4">
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((category, index) => (
                                <Link className="block" key={index} href={`/category/${category}`}>
                                    <li key={index} className="py-2 hover:text-indigo-600 flex items-center gap-x-3 cursor-pointer transition-all">
                                        <span className="block w-8 h-8">
                                            <FcGallery className="w-full h-full" />
                                        </span>

                                        <p className="font-medium">Category item</p>

                                        <span className="ml-auto">
                                            <GoChevronRight className="text-xl" />
                                        </span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
};
