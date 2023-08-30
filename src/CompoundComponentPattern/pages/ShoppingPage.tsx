import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { OnChangeArgs, Product } from "../interfaces/ProductsInterfaces";
import { useState } from "react";

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};
const product2 = {
  id: 2,
  title: "Coffee Mug 2 ",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: number]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((prev) => {
      if (!count) {
        const { [product.id]: toDelete, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };
  return (
    <div>
      <h1>Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <>
          {/* <ProductCard product={product} className="bg-dark">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ background: "#70d1f8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bolder" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard> */}
        </>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onChange={onProductCountChange}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, value]) => {
            const { count, ...rest } = value;
            return (
              <ProductCard
                product={value}
                key={key}
                className="bg-dark text-white"
                style={{ width: "100px" }}
                onChange={onProductCountChange}
                value={value.count}
              >
                <ProductImage className="custom-image" />
                <ProductButtons
                  className="custom-buttons"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
