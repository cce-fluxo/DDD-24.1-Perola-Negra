"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import leftChevron from "../../../public/icons/left-chevron.png";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-screen py-5 px-10 justify-end fixed z-50">
      <ul className="flex row gap-8 font-semibold justify-end">
        <li>
          <Link href={"/banner"}>Banner</Link>
        </li>
        <li>
          <Link href={"/produtos"}>Produtos</Link>
        </li>
        <li>
          <Link href={"/fluxo-pedidos"}>Fluxo de Pedidos</Link>
        </li>
        <li>
          <Link href={"/controle-estoque"}>Controle de Estoques</Link>
        </li>
        <li>
          <Link href={"/cupons"}>Cupons</Link>
        </li>
      </ul>
      <div className="flex row gap-6">
        <Image
          src={leftChevron}
          alt=""
          className="object-none cursor-pointer"
          onClick={() => router.push("/home")}
        ></Image>
        <Link href={"/home"}>
          <h1 className="align-baseline font-bold text-5xl">LOGO</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;