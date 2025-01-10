import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

const Button = ({ content, isPrimary = true, ...props }) => {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
      })}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
