import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

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
                                <BreadcrumbLink href="/admin/products">Продукты</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Название продукта</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="my-6 flex items-end gap-x-6">
                    <h1 className="text-5xl font-medium">
                        Название продукта
                    </h1>
                </div>

                <div className="my-12 py-6 flex items-center justify-between gap-x-5 border-y">
                    <div className="flex items-center gap-x-5">
                        <p className="text-sm">Последнее изменение: <b>April 12th 2024, 5:36 PM</b></p>
                        <p className="text-sm">Созданный: <b>April 12th 2024, 5:36 PM</b></p>
                    </div>

                    <div className="flex gap-x-4">
                        <Button variant={'outline'}>
                            Отмена
                        </Button>
                        <Button>
                            Создать
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    )
};
