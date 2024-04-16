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
export default function Link({ children, ...props }: LinkProps) {
    const { lang } = useParams()
    const linkHref = (href: string) => {
        if (lang) {
            return `/${lang}${href}`
        }
        else {
            return href
        }
    };

    return (
        <NativeLink {...props} href={linkHref(props.href)}>{children}</NativeLink>
    )
}