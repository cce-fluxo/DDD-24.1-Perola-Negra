"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BtnCinza from "./BtnCinza";
import Image from "next/image";

const CategoriasHeader: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown
  const currentPath = usePathname();

  // Função para verificar se o link é o da página atual
  const isActive = (path: string) => currentPath === path;

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white w-full py-4 px-4 sm:px-10 lg:px-20 flex flex-col sm:flex-row z-10 items-center justify-between lg:mt-6">
      {/* Nav com categorias para tamanhos acima de md */}
      <ul className="hidden md:flex flex-wrap gap-2 sm:gap-4 md:gap-8 font-semibold w-full justify-center sm:justify-start">
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
                ? "underline underline-offset-2 text-black"
                : "text-black"
            }
          >
            <Link href={`/produtos/${categoria}`}>
              {`Categoria ${categoria.split("-")[1]}`}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu responsivo para tamanhos md ou menores */}
      <div className="flex md:hidden w-full justify-between items-center">
        {/* Botão de menu ... */}
        <button
          title="Menu"
          onClick={toggleDropdown}
          className="text-black font-bold text-5xl"
        >
          <Image src="/icons/more.png" alt="Menu" width={40} height={40} />
        </button>

        {/* Dropdown de categorias */}
        {dropdownOpen && (
          <ul className="absolute top-32 left-4 bg-white shadow-lg rounded-md p-4 w-3/4 z-20">
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
                    ? "underline underline-offset-2 text-black"
                    : "text-black"
                }
              >
                <Link href={`/produtos/${categoria}`}>
                  {`Categoria ${categoria.split("-")[1]}`}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Botão cinza para editar categoria */}
      </div>
      <div>
        <div>
          <BtnCinza texto="Editar Categoria" rota={"/editar-categoria"} />
        </div>
      </div>
    </div>
  );
};

export default CategoriasHeader;
