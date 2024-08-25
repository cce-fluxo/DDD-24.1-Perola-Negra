"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FluxoDePedidos: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("../fluxo-de-pedidos/visao-geral");
  }, [router]);

  return null; // Não há necessidade de renderizar nada, pois estamos redirecionando.
};

export default FluxoDePedidos;
