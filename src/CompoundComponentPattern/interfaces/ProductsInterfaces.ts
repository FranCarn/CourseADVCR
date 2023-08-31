import {
  ProductButtonsProps,
  ProductImageProps,
  ProductTitleProps,
} from "../components";

export interface ProductCardProps {
  product: Product;
  children?: (initialValue: InitialValues) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}
export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
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
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: ({ className, style }: ProductButtonsProps) => JSX.Element;
}
