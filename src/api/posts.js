import axios from "axios";
export const API = axios.create({ baseURL: "http://localhost:3002" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const creatProduct = (newProduct) => {
  API({
    method: "POST",
    url: "/card",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
};
export const SignUp = async (userData) => {
  try {
    return await API.post("/users/signup", userData);
  } catch (error) {
    console.log(error);
  }
};
export const SignIn = async (userData) => {
  try {
    const { data } = await API.post("/users/signin", userData);
    localStorage.setItem("profile", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchproducts = () =>
  API.get("/card").then((res) => {
    console.log(res)
    return res.data;
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

export const fetchProductSecond = (newProduct) =>
  API({
    method: "GET",
    url: "/secondCardsRouter",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newProduct,
  });
