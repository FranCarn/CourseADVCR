import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductsInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product });
  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
