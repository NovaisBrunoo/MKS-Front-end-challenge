"use client";

import api from "@/api/api";
import { useEffect, useState } from "react";
import { ICartProduct, IProduct, IProducts } from "@/interface/IProducts";
import Image from "next/image";
import { formateCurrency } from "@/func/currentPrice";
import { useUserContext } from "@/context/contextGlobal";

export default function CardProduct() {
  const { setItemProduct, itemProduct, products, setProducts } = useUserContext();


  async function handleGetProducts() {
    try {
      const response = await api.get("/products?page=1&rows=8&sortBy=id&orderBy=ASC");
      setProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetProducts();
  }, []);

  function handelAddProductCar(product: IProduct) {
    const item: ICartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      photo: product.photo,
      amount: 1
    }
    setItemProduct([...itemProduct, item]);
  }


  return (
    <>
      {products.count > 0 && products.products.map((product) => (
        <div key={product.id} className="w-[217px] flex justify-center items-center rounded-md flex-col shadow-xl ">
          {/* IMAGE */}
          <div className="w-full h-40 flex justify-center items-center mb-3">
            <Image src={product.photo} alt="image-Product" width={100} height={100} />
          </div>

          {/* Titulo e descrição */}
          <div className="w-full h-9 flex justify-between items-center mb-2 p-3 gap-1">
            <div className="w-32 h-9 flex justify-start items-center">
              <span>{product.name}</span>
            </div>

            <div className="w-24 h-9 flex justify-center items-center bg-black rounded-md">
              <span className="text-white text-basem font-bold">
                R$ {formateCurrency(product.price)}
              </span>
            </div>
          </div>

          {/* DESC */}
          <div className="w-full max-h-10 flex justify-center items-center m-6 p-3 ">
            <span className="text-xs">{product.description}</span>
          </div>

          {/* FOOTER */}
          <button className="w-full h-8 flex justify-center items-center bg-[#0F52BA] rounded-b-md gap-4" onClick={() => handelAddProductCar(product)}>
            <div>
              <Image src="/icon/shopbag.svg" alt="icon-shop-bag" width={20} height={20} />
            </div>

            <div>
              <span className="uppercase text-white">
                comprar
              </span>
            </div>

          </button>
        </div>
      )
      )
      }
    </>
  );
}
