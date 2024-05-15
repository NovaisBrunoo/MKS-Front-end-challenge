import { useUserContext } from "@/context/contextGlobal";
import { formateCurrency } from "@/func/currentPrice";
import { ICartProduct } from "@/interface/IProducts";
import Image from "next/image";

export default function CardProductModal() {
  const { itemProduct, setItemProduct } = useUserContext();
  console.log(itemProduct);

  function handelAddProductAmount(product: ICartProduct) {
    const newProduct: ICartProduct[] = itemProduct.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          amount: item.amount + 1,
          price: (parseFloat(item.price) * (item.amount + 1)).toString()
        }
      }
      return item;
    });
    setItemProduct([...newProduct]);
  }
  function handelSubProductAmount(product: ICartProduct) {
    const newProduct: ICartProduct[] = itemProduct.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          amount: item.amount - 1,
          price: (parseFloat(item.price) / item.amount * 1).toString()
        }
      }
      return item;
    });
    setItemProduct([...newProduct]);
  }


  return (
    <>
      {
        itemProduct.map((item, index) => (
          <div key={index} className="w-full h-24 flex justify-center items-center bg-white rounded-md mb-6" >
            <div className="w-20 h-20 flex justify-center items-center">
              <Image
                className="cursor-pointer"
                src={item.photo}
                width={80}
                height={80}
                alt="product" />
            </div>
            <div className="w-full h-full flex justify-center items-center gap-2">
              <div className="w-1/3 h-full flex justify-center items-center">
                <span className="text-lg w-full text-left">{item.name}</span>
              </div>
              <div className="w-16 h-full flex justify-center items-center flex-col">
                <span className="text-xs">Qtd:</span>
                <div className="w-12 h-5 border-[1px] border-[##BFBFBF] flex justify-center items-center rounded-md">
                  <div className="w-1/3 h-full flex justify-center items-center border-r-[1px] border-[##BFBFBF]" onClick={() => handelAddProductAmount(item)}>
                    <span className="text-xs cursor-pointer">+</span>
                  </div>
                  <div className="w-1/3 h-full flex justify-center items-center border-r-[1px] border-[##BFBFBF]">
                    <span className="text-sm">{item.amount}</span>
                  </div>
                  <div className="w-1/3 h-full flex justify-center items-center border-r-[1px] border-[##BFBFBF]" onClick={() => handelSubProductAmount(item)}>
                    <span className="text-xs cursor-pointer">-</span>
                  </div>
                </div>
              </div>
              <div className="w-16 h-full flex justify-center items-center">
                <strong>R${formateCurrency(item.price)}</strong>
              </div>
            </div>
            <div className="w-4 h-4 bg-black rounded-full relative -top-12 -right-2 flex justify-center items-center">
              <Image
                className="cursor-pointer"
                src="/icon/close.svg"
                width={8}
                height={8}
                alt="close" />
            </div>
          </div>
        ))
      }

    </>
  )
}