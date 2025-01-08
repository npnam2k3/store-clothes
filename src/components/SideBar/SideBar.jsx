import React, { useContext } from "react";
import styles from "./style.module.scss";
import { SideBarContext } from "@/context/SideBarProvider";
import classNames from "classnames";

import { TfiClose } from "react-icons/tfi";
import Login from "@components/ContentSideBar/Login/Login";
import Compare from "@components/ContentSideBar/Compare/Compare";

const SideBar = () => {
  const { container, sideBar, overlay, sliderSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleRenderContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case "compare":
        return <Compare />;
      case "wishlist":
        return "wishlist";
      case "cart":
        return "cart";
      default:
        return <Login />;
    }
  };
  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(sideBar, {
          [sliderSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  );
};

export default SideBar;
