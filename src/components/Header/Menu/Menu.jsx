import React, { useContext, useState } from "react";
import styles from "../style.module.scss";
import { SideBarContext } from "@/context/SideBarProvider";
import { StoreContext } from "@/context/storeProvider";
import { useNavigate } from "react-router-dom";

const Menu = ({ content, href }) => {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);

  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleClickShowLogin = () => {
    if (content === "Sign In" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }

    if (content === "Our Shop") {
      navigate("/shop");
    }
  };
  const handleRenderText = (content) => {
    if (content === "Sign In" && userInfo) {
      return `Hello-${userInfo.username}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === "Sign In" && userInfo) {
      setIsShowSubMenu(true);
    }
  };
  return (
    <div
      className={menu}
      onClick={handleClickShowLogin}
      onMouseEnter={handleHover}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
          onClick={handleLogout}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
};

export default Menu;
