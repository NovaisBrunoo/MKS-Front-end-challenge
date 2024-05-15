import { useUserContext } from "@/context/contextGlobal";
import Image from "next/image";

export default function HeaderModal() {
    const { setShowModal, showModal } = useUserContext();

    return (
        <div className="w-4/5 h-28 flex justify-between items-center ">
            <h1 className="w-44 text-2xl font-bold text-white leading-8 ">
                Carrinho de Compras
            </h1>
            <div className="w-9 h-9 flex justify-center items-center bg-black rounded-full cursor-pointer" onClick={() => setShowModal(!showModal)}>
                <Image src="/icon/close.svg" width={20} height={20} alt="close" />
            </div>

        </div>
    )

}