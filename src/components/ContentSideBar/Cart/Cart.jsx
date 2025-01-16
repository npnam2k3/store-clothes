import React, { useContext } from "react";
import styles from "./style.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import { GrCart } from "react-icons/gr";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { SideBarContext } from "@contexts/SideBarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    container,
    boxTotal,
    boxBtn,
    isEmpty,
    boxEmpty,
    textEmpty,
    boxBtnEmpty,
    containerListItem,
  } = styles;
  const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);
  const navigate = useNavigate();
  const handleNavigateToShop = () => {
    navigate("/shop");
    setIsOpen(false);
  };
  const total = listProductCart.reduce((acc, item) => {
    return (acc += item.total);
  }, 0);

  return (
    <div
      className={classNames(container, { [isEmpty]: !listProductCart.length })}
    >
      <HeaderSideBar icon={<GrCart />} title={"CART"} />
      {listProductCart.length ? (
        <div className={containerListItem}>
          <div>
            {isLoading ? (
              <LoadingTextCommon />
            ) : (
              listProductCart.map((item, index) => (
                <ItemProduct
                  key={index}
                  src={item.images[0]}
                  sizePr={item.size}
                  titlePr={item.name}
                  pricePr={item.price}
                  quantity={item.quantity}
                  codePr={item.sku}
                  productId={item.productId}
                  userId={item.userId}
                />
              ))
            )}
          </div>

          <div>
            <div className={boxTotal}>
              <p>SUBTOTAL</p>
              <p>${total}</p>
            </div>

            <div className={boxBtn}>
              <Button content={"VIEW CART"} />
              <Button content={"CHECKOUT"} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div className={textEmpty}>No products in the cart.</div>
          <div className={boxBtnEmpty} onClick={handleNavigateToShop}>
            <Button content={"RETURN TO SHOP"} isPrimary={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
