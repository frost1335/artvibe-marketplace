import { LogoMain, LogoPrimary } from "@/assets"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "@/components/ui/link"
import Image from "next/image"

export default function NotFound() {

    return (
        <div className="w-full h-screen flex items-center justify-center px-5">
            <Card className="max-w-md w-full">
                <div className="flex py-8 pb-4 items-center justify-center">
                    <Image className="dark:hidden" src={LogoMain} alt="artvibe-logo" width={60} height={38} />
                    <Image className="hidden dark:block" src={LogoPrimary} alt="artvibe-logo" width={60} height={38} />
                </div>
                <CardHeader>
                    <CardTitle className="text-center text-8xl font-serif mb-8"><span className="text-magenta">4</span>0<span className="text-magenta">4</span></CardTitle>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold text-center">Ну, это неудобно…</h2>
                </CardContent>
                <CardFooter className="flex-col gap-y-4">
                    <Link className="w-full" href="/">
                        <Button className="w-full" size={'lg'}>
                            Главная страница
                        </Button>
                    </Link>
                    <Button className="w-full" variant={'link'} size={'lg'}>
                        Связаться с нами
                    </Button>
                </CardFooter>
            </Card>
        </div>

    )
};
