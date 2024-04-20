import { Button } from "../ui/button";
import Catalog from "./catalog";
import Search from "./search";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import UserLogin from "./user-login";
import Link from "@/components/ui/link";

export default function Navbar({ resources }: { resources: any }) {
    return (
        <nav className="py-4">
            <div className="container">
                <div className="flex items-center justify-between gap-x-3">
                    <Link href={'/uz'}>
                        ArtVibe
                    </Link>

                    <div className="flex items-center gap-x-3">
                        <Catalog resources={resources} />

                        <Search resources={resources} />
                    </div>

                    <div className="flex items-center gap-x-4">
                        <UserLogin resources={resources} />

                        <Link href={'/uz/wishes'}>
                            <Button variant={'outline'} className="p-1.5" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiHeart className="text-lg" />
                                    <span className="text-sm hidden lg:block">{resources.navbar.wishes}</span>
                                </div>
                            </Button>
                        </Link>

                        <Link href={'/uz/cart'}>
                            <Button variant={'outline'} className="p-1.5" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiShoppingCart className="text-lg" />
                                    <span className="text-sm hidden lg:block">{resources.navbar.cart}</span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};
