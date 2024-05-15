"use client";
import { ICartProduct, IProduct, IProducts } from "@/interface/IProducts";
import {
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";

interface IUserProps {
    children: ReactNode;
}

export interface IUserContext {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    itemProduct: ICartProduct[];
    setItemProduct: (value: ICartProduct[]) => void;
    products: IProducts;
    setProducts: (value: IProducts) => void;
}

export const UserContext = createContext<IUserContext>({
    showModal: false,
    setShowModal: () => { },
    itemProduct: [] as ICartProduct[],
    setItemProduct: () => { },
    products: {
        count: 0,
        products: [] as IProduct[],
    },
    setProducts: () => { },
});

export function UserProvider({ children }: IUserProps) {
    const [showModal, setShowModal] = useState(false);
    const [itemProduct, setItemProduct] = useState<ICartProduct[]>([]);
    const [products, setProducts] = useState<IProducts>({
        count: 0,
        products: [] as IProduct[],
    }
    );


    const contextValue = {
        showModal,
        setShowModal,
        itemProduct,
        setItemProduct,
        products,
        setProducts
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );

}

export function useUserContext() {
    return useContext(UserContext);
}