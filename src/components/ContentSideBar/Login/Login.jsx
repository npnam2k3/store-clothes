import React, { useState } from "react";
import styles from "./style.module.scss";
import InputCommon from "@components/InputCommon/InputCommon";
import Button from "@components/Button/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { container, title, boxRemember, boxBtn, lostPass } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      cf_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label={"Email"}
          type={"text"}
          isRequire={true}
          formik={formik}
        />

        <InputCommon
          id="password"
          label={"Password"}
          type={"password"}
          isRequire={true}
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="cf_password"
            label={"Confirm password"}
            type={"password"}
            isRequire={true}
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRemember}>
            <input type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
        )}
        <div className={boxBtn}>
          <Button content={isRegister ? "REGISTER" : "LOGIN"} type="submit" />
        </div>
      </form>
      <div className={boxBtn} onClick={handleToggle}>
        <Button
          isPrimary={false}
          content={
            !isRegister ? "Don't have an account?" : "Already have an account?"
          }
        />
      </div>
      {!isRegister && <div className={lostPass}>Lost your password?</div>}
    </div>
  );
};

export default Login;
