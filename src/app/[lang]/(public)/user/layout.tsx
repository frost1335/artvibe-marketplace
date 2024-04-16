import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="container py-8">
            <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 font-semibold mb-6 flex items-center gap-x-1">Dilrozbek</h2>

            <div className="grid grid-cols-[1fr_4fr] gap-x-10">
                <div>
                    <ul className="space-y-2">
                        <li>
                            <Link className="px-2 py-3 opacity-80 hover:opacity-100" href={'/uz/user/orders'}>
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link className="px-2 py-3 opacity-80 hover:opacity-100" href={'/uz/user/settings'}>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
};
