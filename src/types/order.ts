import { IProduct } from "./product";
import { IUser } from "./user";

export interface IOrder {
    _id?: string,
    orderNumber: number,
    products: IProduct[]
    customer: IUser,
    totalPrice: number,
    date: string,
    status: 'success' | 'processing' | 'canceled'
    paymentMethod: 'to-courier' | 'by-card'
    deliveryMethod: 'mail' | 'courier'
    customerAdress?: {
        city?: string,
        street?: string
        house?: string
    }
    review?: {
        score?: number,
        message?: string
    }
    createdAt?: string
    updatedAt?: string
}