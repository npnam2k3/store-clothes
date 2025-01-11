import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import InputCommon from "@components/InputCommon/InputCommon";
import Button from "@components/Button/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContext } from "@/context/ToastProvider";
import { register, signIn } from "@/apis/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "@/context/SideBarProvider";
import { StoreContext } from "@/context/storeProvider";

const Login = () => {
  const { container, title, boxRemember, boxBtn, lostPass } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);

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
    onSubmit: async (values) => {
      if (isLoading) {
        return;
      }
      const { email: username, password } = values;
      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      } else {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            toast.success("Login successfully");
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
            // console.log(err);
          });
      }
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
          <Button
            content={
              isLoading ? "LOADING..." : isRegister ? "REGISTER" : "LOGIN"
            }
            type="submit"
          />
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
