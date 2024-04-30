'use client'

import { redirect } from "next/navigation"
import Sidebar from "../_components/sidebar"
import Navbar from "../_components/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    if (false) {
        return redirect('/')
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-x-6">
            <div className="w-full h-full py-5 px-6 pb-16 border-r hidden md:block">
                <Sidebar />
            </div>
            <div className="h-full overflow-auto">
                <Navbar />
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
};
