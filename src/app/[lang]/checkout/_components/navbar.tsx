import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="py-4 shadow-md">
            <div className="container">
                <div className="flex items-center justify-between gap-x-3">
                    <Link href={'/uz'}>
                        ArtVibe
                    </Link>


                    <div className="flex items-center gap-x-14">
                        <Button variant={'ghost'} className="underline">
                            Support
                        </Button>

                        <Button variant={'ghost'}>
                            D. Raximov
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
};
