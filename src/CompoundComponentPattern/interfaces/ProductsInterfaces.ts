import { ReactElement } from "react";
import {
  ProductButtonsProps,
  ProductImageProps,
  ProductTitleProps,
} from "../components";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: ({ className, style }: ProductButtonsProps) => JSX.Element;
}
