import axiosClient from "./axiosClient";

const addProductToCart = async (data) => {
  return axiosClient.post("/cart", data);
};

const getCart = async (userId) => {
  return axiosClient.get(`/cart/${userId}`);
};

export { addProductToCart, getCart };
