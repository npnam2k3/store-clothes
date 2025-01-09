import React from "react";
import styles from "./style.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import { GrCart } from "react-icons/gr";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const Cart = () => {
  const { container, boxTotal, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<GrCart />} title={"CART"} />
        <ItemProduct />
      </div>

      <div>
        <div className={boxTotal}>
          <p>SUBTOTAL</p>
          <p>$199.99</p>
        </div>

        <div className={boxBtn}>
          <Button content={"VIEW CART"} />
          <Button content={"CHECKOUT"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
