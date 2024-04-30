import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function page() {
    return (
        <div>
            <header>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Продукты</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="my-6 flex items-end gap-x-6">
                    <h1 className="text-5xl font-medium">
                        Продукты
                    </h1>

                    <Link href={'/admin/products/create'}>
                        <Button variant={'secondary'} size={'sm'}>
                            Создать новый
                        </Button>
                    </Link>
                </div>
            </header>

            <div>

            </div>
        </div>
    )
};
