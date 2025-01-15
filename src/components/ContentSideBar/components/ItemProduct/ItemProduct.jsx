import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";
import { deleteItem } from "@/apis/cartService";
import { SideBarContext } from "@contexts/SideBarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

const ItemProduct = ({
  src,
  titlePr,
  sizePr,
  pricePr,
  codePr,
  quantity,
  productId,
  userId,
}) => {
  const {
    container,
    boxContent,
    title,
    price,
    boxCloseIcon,
    size,
    code,
    overlay,
  } = styles;
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProductCart } = useContext(SideBarContext);
  const handleRemoveItem = (productId, userId) => {
    setIsDelete(true);
    deleteItem({ productId, userId })
      .then((res) => {
        console.log(res);
        setIsDelete(false);
        handleGetListProductCart(userId, "cart");
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
      });
  };
  return (
    <div className={container}>
      <img src={src} alt="" />
      <div
        className={boxCloseIcon}
        onClick={() => handleRemoveItem(productId, userId)}
      >
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

      {isDelete && (
        <div className={overlay}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
};

export default ItemProduct;
