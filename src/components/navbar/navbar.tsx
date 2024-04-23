import { Button } from "../ui/button";
import Catalog from "./catalog";
import Search from "./search";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import UserLogin from "./user-login";
import Link from "@/components/ui/link";
import Image from "next/image";
import { LogoMain, LogoPrimary } from "@/assets";

export default function Navbar({ resources }: { resources: any }) {
    return (
        <nav className="py-4">
            <div className="container">
                <div className="flex items-center justify-between gap-x-3">
                    <Link href={'/'} className="hidden lg:block">
                        <Image className="dark:hidden" src={LogoMain} alt="artvibe-logo" width={60} height={38} />
                        <Image className="hidden dark:block" src={LogoPrimary} alt="artvibe-logo" width={60} height={38} />
                    </Link>

                    <div className="flex-1 lg:flex-initial flex items-center gap-x-3">
                        <div className="hidden lg:block">
                            <Catalog resources={resources} />
                        </div>

                        <Search resources={resources} />
                    </div>
                    <div className="hidden lg:flex items-center gap-x-4">
                        <UserLogin resources={resources}>
                            <Button variant={'outline'} className="p-1.5 cursor-pointer" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiUser className="text-lg" />
                                    <span className="text-sm hidden lg:block">
                                        {true ? resources.navbar.login : resources.navbar.profile}
                                    </span>
                                </div>
                            </Button>
                        </UserLogin>

                        <Link href={'/wishes'}>
                            <Button variant={'outline'} className="p-1.5" asChild>
                                <div className="flex items-center gap-x-2">
                                    <CiHeart className="text-lg" />
                                    <span className="text-sm hidden lg:block">{resources.navbar.wishes}</span>
                                </div>
                            </Button>
                        </Link>

                        <Link href={'/cart'}>
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
