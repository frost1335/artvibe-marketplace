'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoCloudUploadOutline, IoShirtOutline } from "react-icons/io5";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { FormEvent } from "react"
import { PopoverClose } from "@radix-ui/react-popover";
import Image from "next/image";
import { createSlug } from "@/utils/slug";
import { IProductStyle, IStyleColor } from "@/types/product";

export default function Page() {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [styles, setStyles] = React.useState<IProductStyle[]>([])
    const [tags, setTags] = React.useState<string[]>([])
    const [visibleTags, setVisibleTags] = React.useState<string[]>(['Red shirt', 'Новая стиль', "Рубашка"])
    const [customTag, setCustomTag] = React.useState<string>('')
    const [creatorId, setCreatorId] = React.useState('')
    const [slug, setSlug] = React.useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log('on submit');
    }

    const addStyle = (id: string) => {
        setStyles((val) => {
            const newVal = [...val]
            newVal.push({
                name: "Pullover Hoodie",
                colors: [],
                sellingPrice: 0,
            })

            return newVal
        })
    }

    const addColor = (styleIndex: number, color: string) => {
        const style = JSON.parse(JSON.stringify(styles[styleIndex]))

        const newColor: IStyleColor = {
            colorTitle: color,
            colorContent: color,
            frontImage: '',
            backImage: ''
        }

        style.colors?.push(newColor)

        const newStyles: IProductStyle[] = styles.map((s, idx) => idx === styleIndex ? style : s)

        setStyles([...newStyles])
    }

    const addImage = (styleIndex: number, colorIndex: number, side: string, file: File | undefined) => {
        const style: IProductStyle = JSON.parse(JSON.stringify(styles[styleIndex]))
        const color: IStyleColor = JSON.parse(JSON.stringify(style.colors?.[colorIndex]))

        console.log(file);

        if (side === 'front' && file?.name) {
            color.frontImage = file?.name
        }
        if (side === 'back' && file?.name) {
            color.frontImage = file?.name
        }

        style.colors?.filter((c: IStyleColor) => c.colorContent === color.colorContent ? color : c)

        const newStyles: IProductStyle[] = styles.map((s, idx) => idx === styleIndex ? style : s)
        setStyles([...newStyles])
    }

    const tagToggle = (tag: string) => {
        const isTagged = tags.includes(tag)
        let newTags = [...tags]

        console.log(isTagged);

        if (isTagged) {
            newTags = newTags.filter(t => t !== tag)
        } else {
            newTags.push(tag)
        }

        setTags([...newTags])
    }

    const getProperColors = (styleColors: IStyleColor[] | [] | undefined) => ['red', 'blue', 'black', 'white'].filter((color) => !styleColors?.find(c => c.colorContent === color))

    const changeStyle = (index: number, value: string, name: string) => {
        const style = JSON.parse(JSON.stringify(styles[index]))

        style[name] = value

        const newStyles: IProductStyle[] = styles.map((s, idx) => idx === index ? style : s)

        setStyles([...newStyles])
    }

    const addTag = (e: FormEvent) => {
        e.preventDefault()


        let newTags = [...tags]
        let newVisibleTags = [...visibleTags]
        const isTagged = tags.includes(customTag) || visibleTags.includes(customTag)

        if (!isTagged && customTag.length > 1) {
            newTags.push(customTag)
            newVisibleTags.push(customTag)
            setCustomTag('')
        }

        setTags([...newTags])
        setVisibleTags([...newVisibleTags])
    }

    const onChangeSlug = (value: string) => {
        const createdSlug = createSlug(value, []) // add existing slugs as 2nd argument

        setSlug(createdSlug)
    }

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
                                <BreadcrumbPage>Создать продукт</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="my-6 flex items-end gap-x-6">
                    <h1 className="text-5xl font-medium">
                        Название продукта
                    </h1>
                </div>

                <div className="my-12 py-6 flex items-center justify-between border-y">
                    <p>Создание нового продукта</p>

                    <div className="flex gap-x-4">
                        <Button variant={'outline'}>
                            Отмена
                        </Button>
                        <Button>
                            Создать
                        </Button>
                    </div>
                </div>

                <div className="my-8 w-full grid grid-cols-[2fr_1.5fr] gap-8">
                    <div className="space-y-6">

                        <div className="space-y-2">
                            <Label htmlFor="title">Название</Label>
                            <Input value={title} onChange={({ target: { value } }) => setTitle(value)} placeholder="Название" required id="title" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Описание</Label>
                            <Input value={description} onChange={({ target: { value } }) => setDescription(value)} placeholder="Описание" required id="description" />
                        </div>

                        {
                            !!styles.length && (
                                <div className="rounded-md space-y-6">
                                    {
                                        styles.map((style, styleIndex) => (
                                            <div key={styleIndex} className="space-y-4 border rounded-md p-4">
                                                <div className="flex items-center gap-x-3">
                                                    <p className="text-md">
                                                        Стиль {styleIndex + 1}
                                                    </p>
                                                    <Select value="123">
                                                        <SelectTrigger id="creatorId" className="w-40">
                                                            <SelectValue placeholder="Автор" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="123">User 1</SelectItem>
                                                            <SelectItem value="456">User 2</SelectItem>
                                                            <SelectItem value="789">User 3</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <div className="w-10 h-10">
                                                        <IoShirtOutline className="w-full h-full" />
                                                    </div>
                                                    <h2 className="text-2xl py-3">
                                                        {style.name}
                                                    </h2>

                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="sellingPrice">Цена в <q>so&apos;m</q></Label>
                                                    <Input
                                                        type="number"
                                                        min={1}
                                                        value={style.sellingPrice} onChange={({ target: { value } }) => changeStyle(styleIndex, value, 'sellingPrice')} placeholder="Цена" required id="sellingPrice" />
                                                </div>
                                                <div className="flex flex-col gap-y-5">
                                                    <div className="flex flex-col gap-y-5">
                                                        {style.colors?.map((color, colorIndex) => (
                                                            <div key={colorIndex} className="border flex flex-col gap-y-6 p-4 rounded-md">
                                                                <div className="flex items-center gap-x-6">
                                                                    <div>
                                                                        <Image src={'https://dynamic.bonfireassets.com/thumb/design-image/ad82734d-642e-49ed-bf59-ec233fc01135/cd9b5836-3f2e-4d4b-9367-e794df948681/900/'} alt="product-img" width={60} height={60} />
                                                                    </div>

                                                                    <h3 className="text-xl">
                                                                        Цвет: <span className="font-semibold p-1" style={{ color: color.colorContent, background: '#ccc' }}>{color.colorTitle}</span> ({color.colorContent})
                                                                    </h3>
                                                                </div>

                                                                <div className="space-y-2">
                                                                    <Label htmlFor="frontImage">Переднее изображение</Label>
                                                                    <div className="flex items-center gap-x-4">
                                                                        <IoCloudUploadOutline className="text-2xl" />
                                                                        <Input
                                                                            type="file"
                                                                            min={1}
                                                                            value={color.frontImage}
                                                                            onChange={({ target: { files } }) => addImage(styleIndex, colorIndex, 'front', files?.[0])} placeholder="Переднее изображение" required id="frontImage" />
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-2">
                                                                    <Label htmlFor="backImage">Заднее изображение</Label>
                                                                    <div className="flex items-center gap-x-4">
                                                                        <IoCloudUploadOutline className="text-2xl" />
                                                                        <Input
                                                                            type="file"
                                                                            min={1}
                                                                            value={color.backImage}
                                                                            onChange={({ target: { files } }) => addImage(styleIndex, colorIndex, 'back', files?.[0])} placeholder="Заднее изображение" required id="backImage" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div>
                                                        <Popover>
                                                            <PopoverTrigger className="w-full" asChild>
                                                                <Button type="button" className="w-full" variant={'default'}>
                                                                    + Добавить цвет
                                                                </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent>
                                                                <div className="max-w-md w-full flex gap-3">
                                                                    {
                                                                        getProperColors(style.colors).map((color, idx) => (
                                                                            <PopoverClose key={idx} onClick={() => addColor(styleIndex, color)} className="flex flex-col gap-y-2 items-center cursor-pointer">
                                                                                <div className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg border" style={{ background: color }} />
                                                                                <span className="text-sm opacity-70">
                                                                                    {color}
                                                                                </span>
                                                                            </PopoverClose>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }

                        <div>
                            <Popover>
                                <PopoverTrigger className="w-full" asChild>
                                    <Button type="button" className="w-full" variant={'default'}>
                                        + Добавить стиль
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="max-w-md w-full flex flex-col gap-y-5">
                                        <PopoverClose onClick={() => addStyle('123')} className="flex items-center gap-x-5 px-6 py-4 cursor-pointer">
                                            <span>
                                                <IoShirtOutline className="text-2xl" />
                                            </span>
                                            <div>
                                                <p>Pullover Hoodie</p>
                                            </div>
                                        </PopoverClose>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="creatorId">Автор</Label>
                            <Select value={creatorId} onValueChange={(value) => setCreatorId(value)}>
                                <SelectTrigger id="creatorId">
                                    <SelectValue placeholder="Автор" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="123">User 1</SelectItem>
                                    <SelectItem value="456">User 2</SelectItem>
                                    <SelectItem value="789">User 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug-URL: <q>artvibe.uz/my-shirt</q></Label>
                            <Input value={slug} onChange={({ target: { value } }) => setSlug(value)} onBlur={({ target: { value } }) => onChangeSlug(value)} placeholder="Пример: my-shirt" required id="slug" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="slug">Теги</Label>
                            <div className="flex flex-wrap gap-4">
                                {
                                    visibleTags.map((tag, idx) => (
                                        <Button onClick={() => tagToggle(tag)} key={idx} variant={tags.includes(tag) ? 'default' : 'outline'}>
                                            #{tag}
                                        </Button>
                                    ))
                                }
                            </div>

                            <form onSubmit={addTag} className="flex items-center gap-x-3">
                                <Input onChange={({ target: { value } }) => setCustomTag(value)} value={customTag} name="tag" id="tag" placeholder="Добавить новый" />
                                <Button className="text-lg" size={'icon'}>
                                    +
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};
