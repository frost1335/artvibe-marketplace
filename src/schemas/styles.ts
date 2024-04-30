import { z } from "zod"

export const styleColorSchema = z.object({
    colorTitle: z.string().min(1, 'Название обезятельно'),
    colorContent: z.string().min(1, 'Цвет обезятельно'),
    frontImage: z.string().min(1, 'Картинка обезятельна'),
    backImage: z.string().min(1, 'Картинка обезятельна'),
})

export const styleSizes = z.object({
    name: z.string().min(1, 'Размер обезятельно')
})

export const styleSchema = z.object({
    name: z.string().min(1, 'Название обезятельно'),
    colors: z.array(styleColorSchema).min(1, 'Цвет обезятельно'),
    sellingPrice: z.number(),
    sizes: z.array(styleSizes).min(1, 'Размер обезятельно'),
})



