import React, { useContext } from "react";
import styles from "./style.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import { GrCart } from "react-icons/gr";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { SideBarContext } from "@contexts/SideBarProvider";

const Cart = () => {
  const { container, boxTotal, boxBtn } = styles;
  const { listProductCart } = useContext(SideBarContext);
  console.log(listProductCart);
  return (
    <div className={container}>
      <div>
        <div>
          <HeaderSideBar icon={<GrCart />} title={"CART"} />
        </div>
        <div style={{ overflow: "scroll" }}>
          {listProductCart.map((item, index) => (
            <ItemProduct
              key={index}
              src={item.images[0]}
              sizePr={item.size}
              titlePr={item.name}
              pricePr={item.price}
              quantity={item.quantity}
              codePr={item.sku}
            />
          ))}
        </div>
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
