import { Button } from "@/components/ui/button";
import Link from "next/link";
import Adress from "./_components/adress";
import Recipient from "./_components/recipient";
import PaymentMethod from "./_components/payment-method";

export default function page() {
    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">Order checkout</h2>


            <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4">

                <div className="space-y-4">
                    <Adress />
                    <Recipient />
                    <PaymentMethod />
                </div>

                <div className="sticky top-6 h-min p-5 border border-zinc-300 dark:border-zinc-500 rounded-md">
                    <h3 className="text-xl font-semibold mb-4 flex flex-wrap items-center justify-between">
                        Your order
                        <Link href={'/uz/cart'} className="text-sm underline text-zinc-400">
                            Go to cart
                        </Link>
                    </h3>
                    <p className="flex items-center justify-between text-sm mb-2">Products ({3}): <span>250 00So&apos;m</span></p>
                    <p className="flex items-center justify-between text-sm mb-6">Delivery: <span>free</span></p>
                    <p className="flex items-center justify-between mb-6">Total: <span className="text-xl font-medium">250 00So&apos;m</span></p>
                    <Button size={'lg'} className="w-full mb-8" disabled>
                        Pay with card
                    </Button>
                    <p className="text-zinc-500 text-xs leading-5">
                        Размещая заказ, вы соглашаетесь на обработку персональных данных в соответствии с&nbsp;
                        <Link href={'/uz/privacy'} className="underline">
                            Соглашением о конфиденциальности
                        </Link> и&nbsp;
                        <Link href={'/uz/personal'} className="underline">
                            Пользовательским соглашением
                        </Link>&nbsp;
                        ArtVibe.
                    </p>
                </div>
            </div>
        </div>
    )
};
