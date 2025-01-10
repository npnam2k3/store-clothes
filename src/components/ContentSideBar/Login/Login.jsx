import React from "react";
import styles from "./style.module.scss";
import InputCommon from "@components/InputCommon/InputCommon";
import Button from "@components/Button/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { container, title, boxRemember, boxBtn, lostPass } = styles;

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
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label={"Username or email"}
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

        <div className={boxRemember}>
          <input type="checkbox" name="" id="" />
          <span>Remember me</span>
        </div>
        <div className={boxBtn}>
          <Button content={"LOGIN"} type="submit" />
        </div>
      </form>
      <div className={lostPass}>Lost your password?</div>
    </div>
  );
};

export default Login;
