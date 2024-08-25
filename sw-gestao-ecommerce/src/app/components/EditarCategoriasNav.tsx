"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BtnCinza from "./BtnCinza";

interface EditarCategoriasNavProps {
  initialVariant?: "primary" | "select"; // Define "primary" e "select" como possíveis valores
  onVariantChange: (newVariant: "primary" | "select") => void;
}

const EditarCategoriasNav: React.FC<EditarCategoriasNavProps> = ({
  initialVariant = "primary", // Define "primary" como valor padrão
  onVariantChange,
}) => {
  const currentPath = usePathname().split("/").slice(0, 3).join("/");

  const handleSelectClick = () => {
    onVariantChange("select");
  };

  const handleCancelClick = () => {
    onVariantChange("primary");
  };

  return (
    <div className="bg-white w-screen flex-row content-center">
      {initialVariant === "primary" && (
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
            <button onClick={handleSelectClick} className="font-semibold">
              Selecionar
            </button>
          </li>
        </ul>
      )}
      {initialVariant === "select" && (
        <ul className="flex row gap-8 font-semibold">
          <BtnCinza texto="Aplicar Desconto" rota=""></BtnCinza>
          <li>
            <BtnCinza
              texto="Cancelar"
              rota=""
              onClick={handleCancelClick}
            ></BtnCinza>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EditarCategoriasNav;
