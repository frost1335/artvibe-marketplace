import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MdCheck } from "react-icons/md";
import Link from "next/link";

export default function CartItem() {
    return (
        <div className="p-5">
            <Link href={`/uz/product/123`}>
                <h3 className="font-semibold mb-3">Product title</h3>
            </Link>
            <div className="flex flex-col divide-zinc-300 divide-y">

                {[1, 2].map((item, index) => (
                    <div key={index} className="flex flex-col gap-y-4 py-4">
                        <div className="grid items-center grid-cols-[1fr_1fr_4fr_1fr_2.5fr_1fr] gap-x-4">
                            <div id="picture">
                                <Image className="rounded-sm" src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="cart-item-img" width={60} height={60} />
                            </div>
                            <div id="quantity" className="w-16">
                                <Input defaultValue={1} type="number" min={0} max={100} />
                            </div>
                            <div id="product-type">
                                <Select value="0">
                                    <SelectTrigger>
                                        <SelectValue placeholder="product" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">Product 1</SelectItem>
                                        <SelectItem value="1">Product 2</SelectItem>
                                        <SelectItem value="2">Product 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div id="size">
                                <Select value="0">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">SM</SelectItem>
                                        <SelectItem value="1">LG</SelectItem>
                                        <SelectItem value="2">XL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div id="price" className="flex items-center">
                                <span className="text-lg text-zinc-700 dark:text-zinc-200 font-medium">
                                    25 000So&apos;m
                                </span>
                            </div>
                            <div id="close">
                                <button className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-300 dark:bg-zinc-500">
                                    <RxCross1 className="text-xs" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-2">
                                <button className="w-8 h-8 rounded-full border border-zinc-400 dark:border-zinc-300 flex items-center justify-center">
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-red-400">
                                        <MdCheck className="text-white" />
                                    </span>
                                </button>
                                <button className="w-8 h-8 rounded-full border border-transparent flex items-center justify-center">
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-400">
                                        {/* <MdCheck className="text-white" /> */}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <button className="text-sm text-indigo-500 dark:text-indigo-300">
                    + Add another item
                </button>
            </div>
        </div>
    )
};
