'use client'
import { Input } from "@/components/ui/input"
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useState } from "react"
import { CiSearch } from "react-icons/ci"

export default function Search({ resorces }: { resorces: any }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const { lang } = useParams()

    const [search, setSearch] = useState('')

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault()

        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set('query', search);
        } else {
            params.delete('query');
        }
        replace(`/${lang}/search?${params.toString()}`);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="flex items-center">
                <Input onChange={({ target: { value } }) => setSearch(value)} className="lg:w-[400px] md:w-[250px] rounded-r-none focus-visible:ring-0" placeholder={resorces.navbar.search} name="search" id="search" />
                <button className="h-full px-5 py-2.5 bg-zinc-200 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-200 rounded-r-md">
                    <CiSearch />
                </button>
            </form>
        </div>
    )
};
