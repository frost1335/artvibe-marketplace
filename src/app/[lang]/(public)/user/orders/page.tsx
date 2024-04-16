import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function page() {
    const orders = []
    return (
        <div>
            {orders.length ? (
                <div>

                </div>
            ) : (
                <div className="py-32 flex flex-col items-center justify-center gap-y-3">
                    <h3 className="text-2xl font-semibold opacity-50">It&apos;s empty here :(</h3>
                    <p className="max-w-md text-center">У вас отсутствуют активные заказы!
                        Воспользуйтесь поиском, чтобы найти всё что нужно.</p>
                    <Link href={'/uz'}>
                        <Button>
                            Start buying
                        </Button>
                    </Link>
                </div >

            )
            }
        </div >
    )
};
