import React from "react";
import Link from "next/link";
import BtnCinza from "./BtnCinza";

const EditarCategoriasNav: React.FC = () => {
  return (
    <div className="bg-white w-screen flex-row content-center">
      <ul className="flex row gap-16 font-semibold">
        <li>
          <Link href={""}>Adicionar produto</Link>
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
