import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
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
        </ProductCard>
      </div>
    </div>
  );
};
