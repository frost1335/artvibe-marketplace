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
                <div>
                    <Button variant={'secondary'} className="hidden lg:block hover:text-magenta hover:bg-magenta/15 dark:hover:bg-magenta/20">
                        <div className="flex items-center gap-x-3">
                            <GrCatalog className="text-lg" />
                            <span className="hidden md:block">
                                {resources.navbar.catalog}
                            </span>
                        </div>
                    </Button>
                    <li className="lg:hidden flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[22px]">
                            <GrCatalog />
                        </span>
                        <p className="text-xs">
                            {resources.navbar.catalog}
                        </p>
                    </li>
                </div>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader>
                    <SheetTitle>{resources.navbar.categories}</SheetTitle>
                </SheetHeader>

                <div className="py-6">
                    <ul className="space-y-3 md:space-y-4">
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((category, index) => (
                                <Link className="block" key={index} href={`/category/${category}`}>
                                    <li key={index} className="py-2 hover:text-magenta/90 flex items-center gap-x-3 cursor-pointer transition-all">
                                        <span className="block w-6 h-6 md:w-8 md:h-8">
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
