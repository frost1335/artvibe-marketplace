import ProductIcon from "@/components/product-icon";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image";
import Link from "next/link";

import SizeInfo from "./_components/size-info";
import AddToCart from "./_components/add-to-cart";

import { BsCheckLg } from "react-icons/bs";
import { PiWarningDiamond } from "react-icons/pi";
import SimilarProducts from "./_components/similar-products";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

interface PageProps {
    searchParams: { color: number, product: number, side: string },
    params: {
        lang: Locale
        slug: string
    },
}

export default async function page({ searchParams: { color = 0, product = 0, side = 'front' }, params: { lang, slug } }: PageProps) {
    const resources = await getDictionary(lang)

    console.log(slug);

    return (
        <div id="product">
            <div className="container">
                <div className="my-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-xs" href="/">{resources.product.homelink}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-xs" href="/category">{resources.product.categoryAll}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-xs">Product Title</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
                    <div className="md:sticky flex lg:justify-end justify-center top-10 h-min bg-transparent">
                        <div className="relative w-full max-h-[700px] max-w-[700px] bg-transparent">
                            <Image className="aspect-square rounded-lg" src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="product-img" width={700} height={700} />

                            <div>
                                <div className="bg-transparent flex flex-col items-center gap-3 absolute bottom-5 left-1 z-10">
                                    <Link href={{ query: { product, side: "front", color } }} scroll={false} className={`${side === 'front' ? 'border-zinc-400' : 'border-zinc-100 hover:border-zinc-200'} p-2 bg-white rounded-lg border-2 transition-all max-w-[50px] max-h-[50px]`}>
                                        <Image className="w-full h-full object-contain" src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="campaign-image" width={30} height={30} />
                                    </Link>
                                    <Link href={{ query: { product, side: "back", color } }} scroll={false} className={`${side === 'back' ? 'border-zinc-400' : 'border-zinc-100 hover:border-zinc-200'} p-2 bg-white rounded-lg border-2  hover:border-zinc-300 transition-all max-w-[50px] max-h-[50px]`}>
                                        <Image className="w-full h-full object-contain" src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="campaign-image" width={30} height={30} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-sans font-bold text-zinc-600 dark:text-zinc-200 leading-normal mb-3">
                            Embrace Equity
                        </h2>

                        <p className="relative inline-flex px-3 py-3.5 rounded-md bg-zinc-200 dark:bg-zinc-400 font-sans font-medium text-zinc-600 mb-2 after:block after:absolute after:left-[20px] after:-bottom-[19px] after:border-[10px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-zinc-200 after:dark:border-t-zinc-400">product description</p>

                        <div className="flex items-center my-2 gap-x-1.5">
                            <span className="w-6 h-6 block rounded-full bg-zinc-400" />
                            {resources.product.author1} Dilrozbek {resources.product.author2}
                        </div>

                        <div className="lg:my-10 my-4">
                            <h3 className="font-semibold text-zinc-600 dark:text-zinc-300 mb-3 text-base uppercase font-mono">{resources.product.color}</h3>
                            <ul className="flex items-center gap-2">
                                <li>
                                    <Link href={{ query: { product, side, color: 0 } }} scroll={false} className="relative block border cursor-pointer border-gray-400 p-1 rounded-full">
                                        <span style={{ background: '#444' }} className="flex rounded-full w-6 h-6" />
                                        {
                                            color == 0 && (
                                                <span className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                                    <BsCheckLg className="shadow-sm" />
                                                </span>
                                            )
                                        }
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ query: { product, side, color: 1 } }} scroll={false} className="relative block border cursor-pointer border-gray-400 p-1 rounded-full">
                                        <span style={{ background: '#eee' }} className="flex rounded-full w-6 h-6" />
                                        {
                                            color == 1 && (
                                                <span className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                                    <BsCheckLg />
                                                </span>
                                            )
                                        }
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:my-10 my-4">
                            <h3 className="font-semibold text-zinc-600 dark:text-zinc-300 mb-3 text-base uppercase font-mono">{resources.product.style}<span className="text-xl ml-2">149 000So&apos;m</span></h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href={{ query: { product: 0, side, color: 0 } }} scroll={false} key={0} className={`${product == 0 ? (
                                    'bg-zinc-100 border-slate-400 dark:bg-zinc-700 dark:border-zinc-200 bg-opacity-80'
                                ) : 'hover:shadow-lg hover:dark:shadow-zinc-500 hover:border-gray-100 border-slate-300'
                                    } flex cursor-pointer transition-all flex-col items-center lg:px-3 lg:py-5 px-2 py-4 border rounded-2xl w-[125px]`}>
                                    <ProductIcon />
                                    <p className="text-zinc-600 dark:text-zinc-200 text-sm text-center mt-3 font-medium">Pullover Hoodie</p>
                                </Link>
                                <Link href={{ query: { product: 1, side, color: 0 } }} scroll={false} key={0} className={`${product == 1 ? (
                                    'bg-zinc-100 border-slate-400 dark:bg-zinc-700 dark:border-zinc-200 bg-opacity-80'
                                ) : 'hover:shadow-lg hover:dark:shadow-zinc-500 hover:border-gray-100 border-slate-300'
                                    } flex cursor-pointer transition-all flex-col items-center lg:px-3 lg:py-5 px-2 py-4 border rounded-2xl w-[125px]`}>
                                    <ProductIcon />
                                    <p className="text-zinc-600 dark:text-zinc-200 text-sm text-center mt-3 font-medium">Pullover Hoodie</p>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:my-10 my-4">
                            <h3 className="font-semibold text-zinc-600 dark:text-zinc-300 mb-3 text-base uppercase font-mono">{resources.product.size}</h3>
                            <div className="flex mb-3 gap-2">
                                {
                                    true ? (
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {
                                                    ['XS', 'SM', "LG", 'XL'].map((size, index) => (
                                                        <button key={index} className="px-3 py-1 rounded-lg border border-slate-300 text-sm text-zinc-600 dark:text-zinc-300 font-semibold font-mono hover:border-slate-500 hover:shadow-md transition-all">
                                                            {size}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                            <SizeInfo />
                                        </div>

                                    ) : (
                                        <h4 className="text-zinc-600 dark:text-zinc-300 font-sans flex items-center font-semibold">{resources.product.noSize}<span className="text-2xl text-orange-600 ml-2"><PiWarningDiamond /></span></h4>
                                    )
                                }
                            </div>
                        </div>

                        <div className="lg:my-10 my-4">
                            <AddToCart />
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="w-full h-16 gap-x-3">
                            <TabsTrigger value="account" className="text-base py-2 px-4">{resources.product.about}</TabsTrigger>
                            <TabsTrigger value="password" className="text-base py-2 px-4">{resources.product.comments}</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <div className="py-4 px-0 md:py-10 container max-w-5xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate illum voluptas, eaque quisquam rerum, architecto rem, voluptatem quas quis perferendis enim maiores ad ut facilis exercitationem sed minus excepturi non recusandae? Deleniti, provident. Dolorum provident recusandae quae dolor iusto consequatur a repellat, error laboriosam soluta id, eum voluptate iste aperiam natus corporis quas commodi, eveniet quisquam beatae dolore ipsam quod cumque dolorem? Mollitia non magnam, ducimus unde officia repellendus nihil optio accusamus dolorum labore perspiciatis natus laudantium a maiores eveniet laboriosam beatae, fugiat quaerat libero impedit animi tempora minima! Soluta deserunt, assumenda iste deleniti non repellendus ea quos debitis exercitationem recusandae ratione ut natus ex, voluptate suscipit ipsum odit. Reprehenderit perferendis iusto inventore ipsum! Quia, maiores id a nihil minima blanditiis minus. Id quia eos dignissimos non corrupti quis earum doloremque nulla odit laudantium! Ipsa quaerat tenetur vitae, incidunt dolorem distinctio quasi eligendi esse ex fugiat rerum dignissimos error quibusdam deserunt. Fugit aliquam consequuntur hic, ipsam alias necessitatibus eos id nemo deserunt rerum officia optio dignissimos eum obcaecati qui quidem dolore cumque soluta nostrum veniam ut impedit tempora fuga perferendis? Excepturi ipsam laudantium tempora quaerat asperiores, ducimus cum quo enim architecto fugiat, deleniti, aperiam quas voluptates tenetur amet laboriosam.
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="py-4 px-0 md:py-10 container max-w-5xl">
                                <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 py-4 mb-6 border-b border-b-zinc-400">
                                    {resources.product.allComments}, <span className="text-zinc-400 dark:text-zinc-600">{3} {resources.product.commentCount}</span>
                                </h3>

                                <h5>
                                    Comments
                                </h5>
                                <h5>
                                    Comments
                                </h5>
                                <h5>
                                    Comments
                                </h5>
                                <h5>
                                    Comments
                                </h5>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <SimilarProducts resources={resources as typeof resources} />
            </div>
        </div>
    )
};
