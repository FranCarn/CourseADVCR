import { useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/ProductsInterfaces";

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: number]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((prev) => {
      // resolve like that if child control the state
      // if (!count) {
      //   const { [product.id]: toDelete, ...rest } = prev;
      //   return rest;
      // }
      // return {
      //   ...prev,
      //   [product.id]: {
      //     ...product,
      //     count,
      //   },

      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = prev;
      return rest;
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
