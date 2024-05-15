export interface IProducts {
    count: number;
    products: IProduct[];
}
export interface IProduct {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
}


export interface ICartProduct {
    id: number;
    name: string;
    price: string;
    photo: string;
    amount: number;
}

