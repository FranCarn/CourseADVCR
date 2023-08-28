import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, useContext, createContext } from "react";
interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
interface Product {
  id: number;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}
const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img src={imgToShow} alt="Product" className={styles.productImg} />;
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  let titleToShow: string;
  if (title) {
    titleToShow = title;
  } else {
    titleToShow = product.title;
  }
  return <span className={styles.productDescription}>{titleToShow}</span>;
};

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
