import axios from "axios";

const api = axios.create({
  baseURL: "https://api-24-1-perola-negra-back-1.onrender.com",
});

export default api;
