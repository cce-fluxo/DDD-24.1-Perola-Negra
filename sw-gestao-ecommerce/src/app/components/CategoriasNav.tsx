"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BtnCinza from "./BtnCinza";
import Image from "next/image";
import axios from "axios";
import api from "@/services/axios";

const CategoriasHeader: React.FC = () => {
  const [categorias, setCategorias] = React.useState([]); // Estado para armazenar as categorias
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown
  const currentPath = usePathname();

  // Função para verificar se o link é o da página atual
  const isActive = (path: string) => currentPath === path;

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Carregar as categorias da API
  async function getCategorias() {
    try {
      const response = await api.get("/categoria");
      setCategorias(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getCategorias();
  }, []);

  return (
    <div className="bg-white w-full py-4 px-4 sm:px-10 lg:px-20 flex flex-col sm:flex-row z-10 items-center justify-between lg:mt-6">
      {/* Nav com categorias para tamanhos acima de md */}
      <ul className="hidden md:flex flex-wrap gap-2 sm:gap-4 md:gap-8 font-semibold w-full justify-center sm:justify-start">
        {categorias.map((categoria) => (
          <li
            key={categoria}
            className={
              isActive(`/produtos/${categoria}`)
                ? "underline underline-offset-2 text-black"
                : "text-black"
            }
          >
            <Link href={`/produtos/${categoria.nome}`}>{categoria.nome}</Link>
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
            {categorias.map((categoria) => (
              <li
                key={categoria}
                className={
                  isActive(`/produtos/${categoria}`)
                    ? "underline underline-offset-2 text-black"
                    : "text-black"
                }
              >
                <Link href={`/produtos/${categoria}`}>{categoria}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botão cinza para editar categoria */}
      <div>
        <BtnCinza texto="Editar Categoria" rota={"/editar-categoria"} />
      </div>
    </div>
  );
};

export default CategoriasHeader;
