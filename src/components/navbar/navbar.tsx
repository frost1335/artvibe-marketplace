import { Button } from "../ui/button";
import Catalog from "./catalog";
import Search from "./search";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import UserLogin from "./user-login";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="py-4">
            <div className="container">
                <div className="flex items-center justify-between gap-x-3">
                    <Link href={'/uz'}>
                        ArtVibe
                    </Link>

                    <div className="flex items-center gap-x-3">
                        <Catalog />

                        <Search />
                    </div>

                    <div className="flex items-center gap-x-4">
                        <UserLogin />

                        <Link href={'/uz/wishes'}>
                            <Button variant={'outline'} className="p-1.5" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiHeart className="text-lg" />
                                    <span className="text-sm hidden lg:block">Wishes</span>
                                </div>
                            </Button>
                        </Link>

                        <Link href={'/uz/cart'}>
                            <Button variant={'outline'} className="p-1.5" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiShoppingCart className="text-lg" />
                                    <span className="text-sm hidden lg:block">Cart</span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};
