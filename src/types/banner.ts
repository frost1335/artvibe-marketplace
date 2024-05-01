import { IProduct } from "./product";
import { IStore } from "./store";

export interface IBanner {
    _id?: string,
    title: string,
    picture: string,
    type: 'product' | 'store'
    link: string
    product?: IProduct
    store?: IStore
    createdAt?: string
    updatedAt?: string
}