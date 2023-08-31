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
  value,
  initialValue,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount } = useProduct({
    onChange,
    product,
    value,
    initialValue,
  });

  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children!(initialValue!)}
      </div>
    </Provider>
  );
};
