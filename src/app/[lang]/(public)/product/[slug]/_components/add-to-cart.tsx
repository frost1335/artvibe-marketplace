import { Button } from "@/components/ui/button";

export default function AddToCart() {
    return (
        <div>
            <div className="hidden lg:block">
                <Button size={'lg'} className="max-w-xs w-full h-14 text-lg">
                    Add to cart
                </Button>
            </div>
            <div className="lg:hidden fixed left-0 bottom-0 right-0 flex items-center justify-between p-2.5 pb-4 bg-white dark:bg-zinc-900">
                <div className="flex flex-col items-start">
                    <span className="text-zinc-500 text-xs">Umumiy narx</span>
                    <p className="font-semibold text-lg">145 000 so&apos;m</p>
                </div>
                <Button size={'lg'}>
                    Add to cart
                </Button>
            </div>
        </div>
    )
};
