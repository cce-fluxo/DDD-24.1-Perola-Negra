"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BtnCinza from "./BtnCinza";
import PopUpEditarCategorias from "./popUp/PopUpEditarCategorias";
import PopUpDesconto from "./PopUpDesconto";

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

  //Lida com o PopUp
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
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
            <button onClick={togglePopUp}>Editar categorias</button>
            {/**Troquei o "Link" por "Button"*/}
            {isPopUpOpen && (
              <>
                {" "}
                {/**Verifica se o PopUp está aberto*/}
                <PopUpEditarCategorias
                  togglePopUp={togglePopUp}
                ></PopUpEditarCategorias>
              </>
            )}
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
          <BtnCinza
            texto="Aplicar Desconto"
            rota=""
            onClick={togglePopUp}
          ></BtnCinza>
          {isPopUpOpen && (
            <>
              {" "}
              {/**Verifica se o PopUp está aberto*/}
              <PopUpDesconto togglePopUp={togglePopUp}></PopUpDesconto>
            </>
          )}
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
