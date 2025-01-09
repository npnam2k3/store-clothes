import React from "react";
import styles from "./style.module.scss";

import { FaRegHeart } from "react-icons/fa6";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const WishList = () => {
  const { container, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<FaRegHeart />} title={"WISHLIST"} />
        <ItemProduct />
      </div>
      <div className={boxBtn}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD ALL TO CART"} isPrimary={false} />
      </div>
    </div>
  );
};

export default WishList;
