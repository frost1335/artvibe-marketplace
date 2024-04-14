import Link from "next/link";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="flex flex-wrap items-start justify-between py-10">
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">For users</h4>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>Contact us</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>Help center</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">For creators</h4>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>Create store</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>Sell on Artvibe</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">Artvibe Social Media</h4>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-4">
                                <Link href={'/instagram'}>
                                    <CiInstagram className="text-3xl" />
                                </Link>
                                <Link href={'/telegram'}>
                                    <PiTelegramLogo className="text-3xl" />
                                </Link>
                                <Link href={'/youtube'}>
                                    <CiYoutube className="text-3xl" />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="border-t border-t-zinc-400 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <Link className="text-sm font-medium text-zinc-700" href={'/policy-privacy'}>
                            Privacy policy
                        </Link>
                        <Link className="text-sm font-medium text-zinc-700" href={'/terms-of-use'}>
                            Terms of use
                        </Link>
                    </div>
                    <p className="text-xs text-zinc-600">
                        «2024© ООО «ARTVIBE MARKET». ИНН 309376127. Все права защищены»
                    </p>
                </div>
            </div>
        </footer>
    )
};
