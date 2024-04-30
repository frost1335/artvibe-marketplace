export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    balance: number,
    surname?: string,
    email?: string,
    birthDate?: string
    storeId?: string
    createdAt?: string,
    updatedAt?: string
}