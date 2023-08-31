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
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  // useEffect(() => {
  //   setCounter(value);
  // }, [value]);

  return {
    counter,
    increaseBy,
  };
};
