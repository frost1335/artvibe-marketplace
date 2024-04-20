'use client'
import NativeLink from "next/link";
import { useParams } from "next/navigation";

interface LinkProps {
    children: React.ReactNode,
    href: string,
    onClick?: () => void,
    className?: string
}

// this link is internationalized link, it has href with correct locale
export default function Link({ children, className, onClick, href }: LinkProps) {
    const params = useParams()

    const linkHref = (href: string): string => {
        if (params.lang) {
            return `/${params.lang}${href}`
        }
        else {
            return href
        }
    };

    return (
        <NativeLink className={className} onClick={onClick} href={linkHref(href)}>{children}</NativeLink>
    )
}