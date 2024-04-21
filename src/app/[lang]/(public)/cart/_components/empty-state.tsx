import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function EmptyState() {
    return (
        <div className="container">
            <div className="py-28 flex flex-col items-center justify-center gap-y-4">
                <span className="flex items-center justify-center w-28 h-28 rounded-full shadow-lg bg-gradient-to-r from-magenta to-gray-400">
                    <LiaShoppingBagSolid className="text-5xl text-white" />
                </span>
                <h2 className="text-2xl font-semibold">
                    Cart is empty
                </h2>
                <p className="text-sm">Start with the selections on the main page or find the product you need through the search</p>
                <Link href={'/uz'}>
                    <Button size={'lg'}>
                        Home page
                    </Button>
                </Link>
            </div>
        </div>
    )
};
