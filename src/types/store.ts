import { IProduct } from "./product"

export interface IStore {
    _id: string,
    title: string
    description: string
    authorId: string
    slug: string
    products: IProduct[]
    background?: string
    logo?: string
    createdAt?: string
    updatedAt?: string
}