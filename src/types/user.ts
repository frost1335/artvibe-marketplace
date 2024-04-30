export enum UserGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNDEFINED = ''
}

export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    surname?: string,
    email?: string,
    gender?: UserGender,
    birthDate?: string
    createdAt?: string,
    updatedAt?: string
}