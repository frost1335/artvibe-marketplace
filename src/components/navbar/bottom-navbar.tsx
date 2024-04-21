import { IoHomeOutline } from "react-icons/io5";
import Catalog from "./catalog";
import Link from "../ui/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";

export default function BottomNavbar({ resources }: any) {
    return (
        <div className="w-full px-2 py-2.5 pb-3.5 bg-white dark:bg-zinc-900 shadow-[0_20px_15px_10px_#444] dark:shadow-[0_20px_20px_10px_#eee] border-t">
            <ul className="max-w-md m-auto flex items-center justify-between gap-x-2">
                <Link href="/">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[22px]">
                            <IoHomeOutline />
                        </span>
                        <p className="text-xs">
                            Bosh sahifa
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
                            Savat
                        </p>
                    </li>
                </Link>
                <Link href="/wishes">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[22px]">
                            <FaRegHeart />
                        </span>
                        <p className="text-xs">
                            Saralangan
                        </p>
                    </li>
                </Link>
                <Link href="/user">
                    <li className="flex flex-col items-center justify-center gap-y-1 hover:text-magenta transition">
                        <span className="text-[22px]">
                            <FaRegUser />
                        </span>
                        <p className="text-xs">
                            Kabinet
                        </p>
                    </li>
                </Link>
            </ul>
        </div>
    )
};
