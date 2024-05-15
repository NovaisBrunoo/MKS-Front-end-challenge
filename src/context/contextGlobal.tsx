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
}

export const UserContext = createContext<IUserContext>({
    showModal: false,
    setShowModal: () => { },
    itemProduct: [] as ICartProduct[],
    setItemProduct: () => { },
});

export function UserProvider({ children }: IUserProps) {
    const [showModal, setShowModal] = useState(false);
    const [itemProduct, setItemProduct] = useState<ICartProduct[]>([]);

    const contextValue = {
        showModal,
        setShowModal,
        itemProduct,
        setItemProduct,
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