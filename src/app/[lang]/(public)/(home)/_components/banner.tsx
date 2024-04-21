import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="container px-1.5 md:px-4">
            <Link href={'/category/products'}>
                <Image className="rounded-2xl overflow-hidden w-full md:aspect-[16/5] aspect-[16/7] object-cover object-center" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
            </Link>
        </div>
    )
};
