import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";

export const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return (
    <div className={styles.productCard}>
      <img src="./coffee-mug.png" alt="coffee" className={styles.productImg} />
      {/* <img src={noImage} alt="Not found" className={styles.productImg} /> */}
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
