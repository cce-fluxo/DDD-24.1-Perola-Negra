import React from "react";
import Link from "next/link";
import BtnCinza from "./BtnCinza";

const FluxoDePedidosNav: React.FC = () => {
  return (
    <div className="bg-white w-screen py-8 px-20 flex-row fixed top-28 z-50">
      <ul className="flex row gap-9">
        <li>
          <Link href={"visao-geral"}>Visao Geral</Link>
        </li>
        <li>
          <Link href={"ultimos-pedidos"}>Ultimos Pedidos</Link>
        </li>
        <li>
          <Link href={"pedidos-enviados"}>Pedidos Enviados</Link>
        </li>
        <li>
          <Link href={"pedidos-entregues"}>Pedidos Entregues</Link>
        </li>
      </ul>
    </div>
  );
};

export default FluxoDePedidosNav;
