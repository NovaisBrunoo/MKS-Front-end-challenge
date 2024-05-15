import { useUserContext } from "@/context/contextGlobal";
import Image from "next/image";

export default function Header() {
    const { setShowModal, showModal, itemProduct } = useUserContext();
    return (
        <div className="w-full h-[101px] flex justify-between items-center bg-[#0F52BA] text-white px-16">
            <div className="flex justify-center items-center gap-1">
                <h1 className="text-6xl">MKS</h1>
                <span className="text-xl">Sistemas</span>
            </div>
            <div className="bg-white flex justify-center items-center gap-3 w-24 h-11 rounded-md cursor-pointer" onClick={() => setShowModal(!showModal)}>
                <Image src="/icon/carshop.svg" width={19} height={19} alt="Logo" />
                <strong className="text-black">{itemProduct.length}</strong>
            </div>
        </div>
    )

}