'use client'

import { Button } from "@/components/ui/button"
import CartItem from "./_components/cart-item"
import EmptyState from "./_components/empty-state"
import PopularProducts from "./_components/popular-products"
import { useRouter } from "next/navigation"

interface ResourcesProps {
    cart: {
        yourCart: string,
        cartProduct: string,
        yourOrder: string,
        products: string,
        checkout: string,
        addItem: string
    }
}

export default function CartPage({ resources }: { resources: ResourcesProps }) {
    const router = useRouter()

    const cartProducts = [1]

    const onCheckout = () => {
        router.push('/uz/checkout')
    }

    return (
        <div>
            {cartProducts.length ? (
                <div className="container py-8">
                    <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">{resources.cart.yourCart}, <span className="text-zinc-400 dark:text-zinc-600">1 {resources.cart.cartProduct}</span></h2>

                    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4">
                        <div className="flex flex-col border border-zinc-300 dark:border-zinc-500 rounded-md divide-y divide-zinc-300">
                            <CartItem resources={resources} />
                            <CartItem resources={resources} />
                        </div>

                        <div className="hidden lg:block sticky top-6 h-min p-5 border border-zinc-300 dark:border-zinc-500 rounded-md">
                            <h3 className="font-semibold mb-4">{resources.cart.yourOrder}</h3>
                            <p className="flex items-center justify-between text-sm mb-6">{resources.cart.products} ({3}): <span>250 00So&apos;m</span></p>
                            <Button onClick={onCheckout} size={'lg'} className="w-full">
                                {resources.cart.checkout}
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyState />
            )}

            <PopularProducts resources={resources} />

            <div className="lg:hidden">
                <div className="fixed flex items-center justify-between bottom-[68px] left-0 right-0 px-5 py-2.5 bg-white dark:bg-zinc-900 border-t border-b z-40">
                    <div className="flex items-start flex-col">
                        <span className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">{resources.cart.yourOrder}</span>
                        <p className="text-lg">
                            150 000 So{`'`}m
                        </p>

                    </div>
                    <Button onClick={onCheckout} size={'lg'}>
                        {resources.cart.checkout}
                    </Button>
                </div>
            </div>
        </div>
    )
};
