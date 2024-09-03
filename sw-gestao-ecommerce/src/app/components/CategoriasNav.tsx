"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BtnCinza from "./BtnCinza";

const CategoriasHeader: React.FC = () => {
  const currentPath = usePathname();

  // Função para verificar se o link é o da página atual
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="bg-white w-full py-4 px-4 sm:px-10 lg:px-20 flex flex-col sm:flex-row fixed top-[112px] z-20">
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-16 font-semibold w-full">
        {[
          "categoria-1",
          "categoria-2",
          "categoria-3",
          "categoria-4",
          "categoria-5",
        ].map((categoria) => (
          <li
            key={categoria}
            className={
              isActive(`/produtos/${categoria}`)
                ? "underline underline-offset-2"
                : ""
            }
          >
            <Link href={`/produtos/${categoria}`}>{`Categoria ${
              categoria.split("-")[1]
            }`}</Link>
          </li>
        ))}
        <BtnCinza texto="Editar Categoria" rota={"/editar-categoria"} />
      </ul>
    </div>
  );
};

export default CategoriasHeader;
