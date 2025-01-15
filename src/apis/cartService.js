import axiosClient from "./axiosClient";

const addProductToCart = async (data) => {
  return axiosClient.post("/cart", data);
};

const getCart = async (userId) => {
  return axiosClient.get(`/cart/${userId}`);
};

const deleteItem = async (body) => {
  return await axiosClient.delete("/cart/deleteItem", { data: body });
};

export { addProductToCart, getCart, deleteItem };
