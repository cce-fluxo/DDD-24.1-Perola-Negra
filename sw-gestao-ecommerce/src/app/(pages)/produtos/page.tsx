"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Produtos: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/produtos/categoria-1");
  }, [router]);

  return null; // Não há necessidade de renderizar nada, pois estamos redirecionando.
};

export default Produtos;
