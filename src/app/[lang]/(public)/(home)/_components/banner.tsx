import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="container">
            <Link href={'/category/products'}>
                <Image className="w-full aspect-[16/5] object-cover rounded-2xl" src={'https://bbdniit.ac.in/wp-content/uploads/2020/09/banner-background-without-image-min.jpg'} alt="banner-img" width={1100} height={500} />
            </Link>
        </div>
    )
};
