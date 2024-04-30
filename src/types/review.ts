export interface IReview {
    _id: string,
    rating: number
    description: string
    orderId: string,
    productId: string,
    createdAt?: string
    updatedAt?: string
}