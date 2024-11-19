/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.ecosweb.com.br", // Adicione os domínios das imagens externas
      "static.zara.net",
    ],
  },
};

export default nextConfig;
