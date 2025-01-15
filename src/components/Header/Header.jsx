import BoxIcon from "@components/Header/BoxIcon/BoxIcon";
import React, { useContext, useEffect, useState } from "react";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./style.module.scss";
import Menu from "@components/Header/Menu/Menu";
import Logo from "@icons/images/Logo-retina.png";
import useScrollHandling from "@/hooks/useScrollHandling";
import classNames from "classnames";
import { SideBarContext } from "@/context/SideBarProvider";
import { TfiReload } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

const Header = () => {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    boxCart,
    quantity,
  } = styles;

  const [fixedPosition, setFixedPosition] = useState(false);
  const { scrollPosition } = useScrollHandling();

  const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);

  useEffect(() => {
    setFixedPosition(scrollPosition > 130);
  }, [scrollPosition]);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };
  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0, 3).map((item, index) => (
              <BoxIcon type={item.type} href={item.href} key={index} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => (
              <Menu
                content={item.content}
                href={item.href}
                key={index}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "153px",
              height: "53px",
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => (
              <Menu content={item.content} href={item.href} key={index} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{ width: "21px", height: "21px", cursor: "pointer" }}
              onClick={() => handleOpenSideBar("compare")}
            />
            <FaRegHeart
              style={{ width: "21px", height: "21px", cursor: "pointer" }}
              onClick={() => handleOpenSideBar("wishlist")}
            />
            <div className={boxCart}>
              <GrCart
                style={{ width: "21px", height: "21px", cursor: "pointer" }}
                onClick={() => handleOpenSideBar("cart")}
              />
              <div className={quantity}>{listProductCart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
