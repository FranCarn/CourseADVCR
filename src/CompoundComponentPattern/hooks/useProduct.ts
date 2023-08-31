import { useState, useEffect, useRef } from "react";
import {
  InitialValues,
  OnChangeArgs,
  Product,
} from "../interfaces/ProductsInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue?.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
