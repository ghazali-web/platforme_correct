import axios from "axios";
export const API = axios.create({ baseURL: "http://localhost:3002" });
export const creatProduct = (newProduct) =>
  API({
    method: "POST",
    url: "/card",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
export const creatProductSecond = (newProduct) =>
  API({
    method: "POST",
    url: "/secondCardsRouter",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
