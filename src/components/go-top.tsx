'use client'

import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

export default function GoTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const showHandler = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        }

        window.addEventListener('scroll', showHandler)

        return () => {
            window.removeEventListener('scroll', showHandler)
        }
    }, [])

    return (
        <div className="hidden md:block">
            <div className={`fixed right-7 z-20 ${show ? "bottom-7 opacity-100" : "-bottom-14 opacity-0"} transition-all duration-300`}>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex w-12 h-12 rounded-full bg-magenta items-center justify-center shadow-md dark:border-2 dark:border-white">
                    <SlArrowUp className="text-2xl text-white" />
                </button>
            </div>
        </div>
    )
};
