import React from "react";
import styles from "../style.module.scss";
import Button from "@components/Button/Button";

const Banner = () => {
  const { containerBanner, title, contentBox, btnBox } = styles;

  return (
    <div className={containerBanner}>
      <div className={contentBox}>
        <div className={title}>The Classics Make A Comeback</div>
        <div className={btnBox}>
          <Button content={"Buy now"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
