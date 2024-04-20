import { z } from "zod"

export enum UserGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNDEFINED = ''
}

export const userSchema = z.object({
    firstName: z.string().min(1, 'Ism kiritish majburiy'),
    lastName: z.string().min(1, 'Familiya kiritish majburiy'),
    surname: z.optional(z.string()),
    email: z.optional(z.string()),
    gender: z.optional(z.enum([UserGender.MALE, UserGender.FEMALE])),
    birthDate: z.optional(z.string())
})