import React from "react";
import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";

const ItemProduct = ({ src, titlePr, sizePr, pricePr, codePr, quantity }) => {
  const { container, boxContent, title, price, boxCloseIcon, size, code } =
    styles;
  return (
    <div className={container}>
      <img src={src} alt="" />
      <div className={boxCloseIcon}>
        <IoMdClose style={{ fontSize: "20px", color: "#888" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>{titlePr}</div>
        <div className={size}>Size: {sizePr}</div>
        <div className={price}>
          {quantity} x ${pricePr}
        </div>
        <div className={code}>SKU: {codePr}</div>
      </div>
    </div>
  );
};

export default ItemProduct;
