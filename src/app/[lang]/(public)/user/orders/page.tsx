import { Button } from "@/components/ui/button"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"

interface PageProps {
    params: {
        lang: Locale
    }
}

export default async function page({ params: { lang } }: PageProps) {
    const resources = await getDictionary(lang)

    const orders = []

    return (
        <div>
            {orders.length ? (
                <div>

                </div>
            ) : (
                <div className="py-32 flex flex-col items-center justify-center gap-y-3">
                    <h3 className="text-2xl font-semibold opacity-50">{resources.user.orders.empty}</h3>
                    <p className="max-w-md text-center">{resources.user.orders.emptySearch}</p>
                    <Link href={'/uz'}>
                        <Button>
                            {resources.user.orders.buy}
                        </Button>
                    </Link>
                </div >

            )
            }
        </div >
    )
};
