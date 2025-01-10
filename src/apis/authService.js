import axiosClient from "./axiosClient";

const register = async (body) => {
  return await axiosClient.post("/register", body);
};
const signIn = async (body) => {
  return await axiosClient.post("/login", body);
};

const getInfo = async () => {
  return await axiosClient.get(
    "/user/info/b01e1cf5-6946-4ca6-9778-5fac7b454f05"
  );
};

export { register, signIn, getInfo };
