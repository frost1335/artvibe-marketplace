import Link from "next/link";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";

export default function Footer({ resorces }: { resorces: any }) {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="flex flex-wrap items-start justify-between py-10">
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resorces.footer.forUsers}</h4>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resorces.footer.contactUs}</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resorces.footer.helpCenter}</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resorces.footer.forCreators}</h4>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resorces.footer.createStore}</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resorces.footer.sellOnArtVibe}</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resorces.footer.socialMedia}</h4>
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
                            {resorces.footer.privacyPolicy}
                        </Link>
                        <Link className="text-sm font-medium text-zinc-700" href={'/terms-of-use'}>
                            {resorces.footer.useTerm}
                        </Link>
                    </div>
                    <p className="text-xs text-zinc-600">
                        «2024© ООО «ARTVIBE MARKET». ИНН 309376127. {resorces.footer.secured}»
                    </p>
                </div>
            </div>
        </footer>
    )
};
