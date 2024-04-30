import { z } from "zod"
import { styleSchema } from "./styles"

export const productSchema = z.object({
    title: z.string().min(1, 'Наззвание обезятельно'),
    description: z.string().min(1, 'Описание обезятельно'),
    styles: z.array(styleSchema).min(1, 'Стили обезятельно'),
    tags: z.array(z.string()).min(1, 'Теги обезятельно'),
    creatorId: z.string().min(1, 'Автор обезятельно'),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().default(new Date())
})