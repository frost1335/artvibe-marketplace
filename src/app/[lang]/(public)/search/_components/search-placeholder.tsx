'use client'
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchPlaceholder() {
    const searchParams = useSearchParams()

    return (
        <React.Suspense>
            <q className="text-lg italic opacity-85">
                {searchParams.get('query')}
            </q>
        </React.Suspense>
    )
};
