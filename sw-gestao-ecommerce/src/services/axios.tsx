import axios from "axios";

const api = axios.create({
  baseURL: "https://api-24-1-perola-negra-back-1.onrender.com",
});

// Interceptor para adicionar o token ao cabeçalho Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@sw-gestao-ecommerce:token");
  if (token) {
    if (config.headers) {
      // Garante que o token está limpo antes de usar
      const cleanToken = token.trim().replace(/^["']|["']$/g, '');
      config.headers.Authorization = `Bearer ${cleanToken}`;
    }
  }
  return config;
});

export default api;
