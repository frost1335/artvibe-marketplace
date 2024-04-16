import PopularProducts from "@/components/popular-products";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <PopularProducts />
        </div>
    )
};
