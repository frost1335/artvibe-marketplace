export interface IProduct {
    _id: string,
    title: string
    description: string
    styles: IProductStyle[],
    tags: string[],
    creatorId: string,
    slug: string
    rating?: number
    reviewNumber?: number
    createdAt?: string
    updatedAt?: string
}

export interface IProductStyle {
    _id: string,
    name: string,
    colors?: IStyleColor[] | [],
    sellingPrice: number
    icon?: string
}

export interface IStyleColor {
    colorTitle: string,
    colorContent: string,
    frontImage: string,
    backImage: string
    frontDesignImage?: string,
    backDesignImage?: string
}

