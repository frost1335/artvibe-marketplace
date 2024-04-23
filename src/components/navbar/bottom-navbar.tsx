import Catalog from "./catalog";
import Link from "../ui/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import UserLogin from "./user-login";

export default function BottomNavbar({ resources }: any) {
    return (
        <div className="w-full px-2.5 py-2.5 pb-3.5 bg-white dark:bg-zinc-900 shadow-lg border-t">
            <ul className="max-w-md m-auto flex items-center justify-between gap-x-2">
                <Link href="/">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[24px]">
                            <AiOutlineHome />
                        </span>
                        <p className="text-xs">
                            {resources.navbar.home}
                        </p>
                    </li>
                </Link>
                <Catalog resources={resources} />
                <Link href="/cart">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[22px]">
                            <FiShoppingCart />
                        </span>
                        <p className="text-xs">
                            {resources.navbar.cart}
                        </p>
                    </li>
                </Link>
                <Link href="/wishes">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[24px]">
                            <FaRegHeart />
                        </span>
                        <p className="text-xs">
                            {resources.navbar.wishes}
                        </p>
                    </li>
                </Link>
                {true ? (
                    <Link href="/user">
                        <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                            <span className="text-[22px]">
                                <FaRegUser />
                            </span>
                            <p className={`text-xs`}>
                                {resources.navbar.cabinet}
                            </p>
                        </li>
                    </Link>
                ) : (
                    <UserLogin resources={resources}>
                        <button>
                            <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                                <span className="text-[22px]">
                                    <FaRegUser />
                                </span>
                                <p className="text-xs">
                                    {resources.navbar.login}
                                </p>
                            </li>
                        </button>
                    </UserLogin>
                )}

            </ul>
        </div>
    )
};
