import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Store</h1>
      <hr />

      <ProductCard
        product={product}
        key={product.id}
        className="bg-dark text-white"
        initialValue={{
          count: 4,
          // maxCount: 10,
        }}
      >
        <ProductImage className="custom-image" />
        <ProductTitle />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
