import Link from "@/components/ui/link";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import Contacts from "../cabinet/contacts";

export default function Footer({ resources }: { resources: any }) {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-800">
            <div className="container">
                <div className="flex flex-col md:flex-row text-center md:text-left flex-wrap items-center md:items-start justify-between gap-4 gap-y-6 py-6 md:py-10">
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resources.footer.forUsers}</h4>
                        </li>
                        <li>
                            <Contacts resources={resources}>
                                <p className="text-sm text-zinc-400">{resources.footer.contactUs}</p>
                            </Contacts>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resources.footer.helpCenter}</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resources.footer.forCreators}</h4>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resources.footer.createStore}</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-zinc-400" href={'/'}>{resources.footer.sellOnArtVibe}</Link>
                        </li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h4 className="text-sm font-semibold text-zinc-600">{resources.footer.socialMedia}</h4>
                        </li>
                        <li>
                            <div className="flex items-center justify-center md:justify-start gap-x-4">
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
                <div className="border-t border-t-zinc-400 py-4 flex flex-col text-center md:text-left md:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-x-4">
                        <Link className="text-sm font-medium text-zinc-700" href={'/policy-privacy'}>
                            {resources.footer.privacyPolicy}
                        </Link>
                        <Link className="text-sm font-medium text-zinc-700" href={'/terms-of-use'}>
                            {resources.footer.useTerm}
                        </Link>
                    </div>
                    <p className="md:text-xs text-[10px] text-zinc-600">
                        «2024© ООО «ARTVIBE MARKET». ИНН 309376127. {resources.footer.secured}»
                    </p>
                </div>
            </div>
        </footer>
    )
};
