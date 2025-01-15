import React from "react";
import styles from "./style.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingTextCommon = () => {
  const { rotate } = styles;
  return <AiOutlineLoading3Quarters className={rotate} />;
};

export default LoadingTextCommon;
