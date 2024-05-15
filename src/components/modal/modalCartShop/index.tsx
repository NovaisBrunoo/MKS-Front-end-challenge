import { useUserContext } from "@/context/contextGlobal";
import CardProductModal from "./components/cardProductModal";
import FooterModal from "./components/footerModal";
import HeaderModal from "./components/headerModal";
import { sumPrices } from "@/func/SomePrice";

export default function ModalCartShop() {
  const { itemProduct } = useUserContext();
  return (
    <div className="w-1/3 h-full flex justify-center items-center flex-col absolute right-0 top-0 bottom-0 bg-[#0F52BA] shadow-2xl">
      <HeaderModal />
      <section className="w-full flex flex-1 justify-between items-center flex-col">
        <div className="w-full h-full flex flex-col justify-start items-center p-11">
          <CardProductModal />

        </div>
        <div className="w-full flex justify-between items-center px-4 mb-5">
          <strong className="text-2xl text-white">Total:</strong>
          <strong className="text-2xl text-white">R${sumPrices(itemProduct)} </strong>
        </div>
      </section>
      <FooterModal />
    </div>
  )
}