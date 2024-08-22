import React from "react";
import Link from "next/link";
import BtnCinza from "./BtnCinza";

const EditarCategoriasNav: React.FC = () => {
  return (
    <div className="bg-white w-screen py-8 px-20 flex-row fixed top-28 z-50">
      <ul className="flex row gap-16 font-semibold">
        <li>
          <Link href={"categoria-1"}>Categoria 1</Link>
        </li>
        <li>
          <Link href={"categoria-2"}>Categoria 2</Link>
        </li>
        <li>
          <Link href={"categoria-3"}>Categoria 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditarCategoriasNav;
