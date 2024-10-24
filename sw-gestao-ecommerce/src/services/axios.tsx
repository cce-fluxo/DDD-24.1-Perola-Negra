import axios from "axios";

const api = axios.create({
  baseURL: "https://back-app-.onrender.com/",
});

export default api;
