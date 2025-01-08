import React from "react";
import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";

const ItemProduct = () => {
  const { container, boxContent, title, price, boxCloseIcon } = styles;
  return (
    <div className={container}>
      <img
        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg"
        alt=""
      />
      <div className={boxCloseIcon}>
        <IoMdClose style={{ fontSize: "20px", color: "#888" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>Title of product</div>
        <div className={price}>$119.99</div>
      </div>
    </div>
  );
};

export default ItemProduct;
