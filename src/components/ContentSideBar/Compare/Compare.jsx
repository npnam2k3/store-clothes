import React from "react";
import styles from "./style.module.scss";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";

import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const Compare = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar icon={<TfiReload fontSize="26px" />} title={"COMPARE"} />
        <ItemProduct />
      </div>
      <div>
        <Button content={"VIEW COMPARE"} />
      </div>
    </div>
  );
};

export default Compare;
