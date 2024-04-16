'use client'

import { Button } from "@/components/ui/button"
import CartItem from "./_components/cart-item"
import EmptyState from "./_components/empty-state"
import PopularProducts from "./_components/popular-products"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    const cartProducts = [1]

    const onCheckout = () => {
        router.push('/uz/checkout')
    }

    return (
        <div>
            {cartProducts.length ? (
                <div className="container py-8">
                    <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">Savatingiz, <span className="text-zinc-400 dark:text-zinc-600">1 mahsulot</span></h2>

                    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4">
                        <div className="flex flex-col border border-zinc-300 dark:border-zinc-500 rounded-md divide-y divide-zinc-300">
                            <CartItem />
                            <CartItem />
                        </div>

                        <div className="hidden lg:block sticky top-6 h-min p-5 border border-zinc-300 dark:border-zinc-500 rounded-md">
                            <h3 className="font-semibold mb-4">Your order</h3>
                            <p className="flex items-center justify-between text-sm mb-6">Products ({3}): <span>250 00So&apos;m</span></p>
                            <Button onClick={onCheckout} size={'lg'} className="w-full">
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyState />
            )}

            <PopularProducts />

            <div className="lg:hidden">
                <div className="fixed flex items-center justify-between bottom-0 left-0 right-0 px-5 py-2.5 bg-white dark:bg-zinc-900 shadow-[0_20px_20px_10px_#444] dark:shadow-[0_20px_20px_10px_#eee] z-30">
                    <div className="flex items-start flex-col">
                        <span className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Your order</span>
                        <p className="text-lg">
                            150 000 So{`'`}m
                        </p>

                    </div>
                    <Button onClick={onCheckout} size={'lg'}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
};
