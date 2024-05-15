"use client";
import CardProduct from "@/components/cardProduct";
import Footer from "@/components/footer";
import Header from "@/components/header"
import ModalCartShop from "@/components/modal/modalCartShop";
import Skeleton from "@/components/skeleton";
import { useUserContext } from "@/context/contextGlobal";
import { useEffect } from "react";

export default function Home() {
  const { showModal, products } = useUserContext();

  useEffect(() => {
    console.log(products);
  }, [products.count]);

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      {showModal && <ModalCartShop />}
      <Header />
      <section className="justify-center items-center flex-1 w-full flex flex-col">
        {products.products.length == 0 && (
          <div className="w-3/4 justify-center items-center gap-5 flex flex-wrap m-1">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )
        }
        <div className="w-3/4 justify-center items-center gap-5 flex flex-wrap m-1">
          <CardProduct />
        </div>
      </section>
      <Footer />
    </div>
  );
}
