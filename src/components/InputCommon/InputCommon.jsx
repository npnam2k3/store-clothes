import React, { useState } from "react";
import styles from "./style.module.scss";

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const InputCommon = ({ label, type, isRequire = false, ...props }) => {
  const { labelInput, boxInput, container, boxIcon, errMsg } = styles;
  const { formik, id } = props;

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isError = formik.touched[id] && formik.errors[id];
  const messError = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequire && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[id]}
        />
        {isPassword && (
          <span className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
        )}
        {isError && <div className={errMsg}>{messError}</div>}
      </div>
    </div>
  );
};

export default InputCommon;
