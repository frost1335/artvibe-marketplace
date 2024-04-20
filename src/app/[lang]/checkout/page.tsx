import { Button } from "@/components/ui/button";
import Link from "next/link";
import Adress from "./_components/adress";
import Recipient from "./_components/recipient";
import PaymentMethod from "./_components/payment-method";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface PageProps {
    params: {
        lang: Locale
    }
}

export default async function page({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-x-1 pb-6">{resources.checkout.title}</h2>


            <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4">

                <div className="space-y-4">
                    <Adress resources={resources.checkout.adress} />
                    <Recipient resources={resources.checkout.recipient} />
                    <PaymentMethod resources={resources.checkout.paymentMethod} />
                </div>

                <div className="sticky top-6 h-min p-5 border border-zinc-300 dark:border-zinc-500 rounded-md">
                    <h3 className="text-xl font-semibold mb-4 flex flex-wrap items-center justify-between">
                        {resources.checkout.yourOrder}
                        <Link href={'/uz/cart'} className="text-sm underline text-zinc-400">
                            {resources.checkout.goToCart}
                        </Link>
                    </h3>
                    <p className="flex items-center justify-between text-sm mb-2">{resources.checkout.products} ({3}): <span>250 00So&apos;m</span></p>
                    <p className="flex items-center justify-between text-sm mb-6">{resources.checkout.delivery}: <span>{resources.checkout.deliveryPrice}</span></p>
                    <p className="flex items-center justify-between mb-6">{resources.checkout.total}: <span className="text-xl font-medium">250 00So&apos;m</span></p>
                    <Button size={'lg'} className="w-full mb-8" disabled>
                        {resources.checkout.payWithCard}
                    </Button>
                    <p className="text-zinc-500 text-xs leading-5">
                        {resources.checkout.agreement}
                    </p>
                </div>
            </div>
        </div>
    )
};
