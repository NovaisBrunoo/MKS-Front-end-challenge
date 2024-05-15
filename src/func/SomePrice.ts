import { ICartProduct } from "@/interface/IProducts";

export function sumPrices(products: ICartProduct[]): number {
    return products.reduce((total, product) => {
        const price = parseFloat(product.price.replace(',', '.'));
        return total + price;
    }, 0);
}