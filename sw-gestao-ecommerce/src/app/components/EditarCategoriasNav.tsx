"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EditarCategoriasNav: React.FC = () => {
  const currentPath = usePathname().split("/").slice(0, 3).join("/");
  return (
    <div className="bg-white w-screen flex-row content-center">
      <ul className="flex row gap-16 font-semibold">
        <li>
          <Link href={`${currentPath}/adicionar-produto`}>
            Adicionar produto
          </Link>
        </li>
        <li>
          <Link href={""}>Editar categorias</Link>
        </li>
        <li>
          <Link href={""}>Selecionar</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditarCategoriasNav;
