"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderFluxoDePedidos: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 w-screen py-5 px-10 justify-end fixed z-50">
      <ul className="flex row gap-8 font-semibold justify-end">
        <li>
          <Link href={"/banner"}>Banner</Link>
        </li>
        <li>
          <Link href={"/produtos"}>Produtos</Link>
        </li>
        <li>
          <Link href={"/fluxo-de-pedidos"}>Fluxo de Pedidos</Link>
        </li>
        <li>
          <Link href={"/controle-estoque"}>Controle de Estoques</Link>
        </li>
        <li>
          <Link href={"/cupons"}>Cupons</Link>
        </li>
      </ul>
      <div className="flex row gap-6">
        <h1 className="align-baseline font-bold text-5xl">FLUXO DE PEDIDOS</h1>
      </div>
    </div>
  );
};

export default HeaderFluxoDePedidos;