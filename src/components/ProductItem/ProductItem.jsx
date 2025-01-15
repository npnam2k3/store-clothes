import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import reloadIcon from "@icons/svgs/reloadIcon1.svg";
import heartIcon from "@icons/svgs/heartIcon2.svg";
import cartIcon from "@icons/svgs/cartIcon1.svg";
import eyeIcon from "@icons/svgs/eyeIcon.svg";
import classNames from "classnames";
import Button from "@components/Button/Button";
import { OurShopContext } from "@contexts/OurShopProvider";
import Cookies from "js-cookie";
import { SideBarContext } from "@contexts/SideBarProvider";
import { ToastContext } from "@contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

const ProductItem = ({
  src,
  prevSrc,
  title,
  price,
  detail,
  isHomePage = true,
}) => {
  const {
    boxImg,
    showImgWhileHover,
    showActionWhileHover,
    boxIcon,
    name,
    priceItem,
    boxSize,
    size,
    textCenter,
    boxBtn,
    brand,
    boxContent,
    containerItem,
    leftBtn,
    largeImg,
    isActiveSize,
    btnClear,
  } = styles;
  const ourShopStore = useContext(OurShopContext);
  const { setIsOpen, setType, handleGetListProductCart, listProductCart } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [sizeChoose, setSizeChoose] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userId = Cookies.get("userId");

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose("");
  };

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType("login");
      toast.warning("Please login to add product to cart");
      return;
    }
    if (!sizeChoose) {
      toast.warning("Please choose size");
      return;
    }

    const data = {
      userId,
      productId: detail._id,
      quantity: 1,
      size: sizeChoose,
    };

    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType("cart");
        setIsLoading(false);
        toast.success(res.data.msg);
        handleGetListProductCart(userId, "cart");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error("Add product to cart failed");
      });
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={classNames(boxImg, { [largeImg]: !isShowGrid })}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhileHover} />

        <div className={showActionWhileHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt="" />
          </div>
        </div>
      </div>

      <div className={isHomePage ? "" : boxContent}>
        {!isHomePage && (
          <div className={boxSize}>
            {detail.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        {sizeChoose && (
          <div className={btnClear} onClick={handleClearSize}>
            clear
          </div>
        )}

        <div className={classNames(name, { [textCenter]: !isHomePage })}>
          {title}
        </div>
        {!isHomePage && (
          <div className={classNames(textCenter, brand)}>Brand 01</div>
        )}
        <div className={classNames(priceItem, { [textCenter]: !isHomePage })}>
          ${price}
        </div>
        {!isHomePage && (
          <div
            className={classNames(boxBtn, { [leftBtn]: !isShowGrid })}
            onClick={handleAddToCart}
          >
            <Button
              content={isLoading ? <LoadingTextCommon /> : "ADD TO CART"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
