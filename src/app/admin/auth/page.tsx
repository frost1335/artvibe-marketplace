import { LogoMain, LogoPrimary } from "@/assets"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "@/components/ui/link"
import Image from "next/image"

export default function page() {
    return (
        <div className="w-full h-screen flex items-center justify-center px-5">
            <Card className="max-w-md w-full">
                <div className="flex py-8 pb-4 items-center justify-center">
                    <Image className="dark:hidden" src={LogoMain} alt="artvibe-logo" width={60} height={38} />
                    <Image className="hidden dark:block" src={LogoPrimary} alt="artvibe-logo" width={60} height={38} />
                </div>
                <CardHeader>
                    <CardTitle className="text-center text-2xl mb-2">🔐Аутентификация</CardTitle>
                    <CardDescription className="text-center">Панель управления</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        Phone number and password form
                    </div>
                </CardContent>
                <CardFooter className="flex gap-x-3">
                    <Link className="w-full" href="/">
                        <Button variant={'outline'} className="w-full">
                            Главная страница
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
};
