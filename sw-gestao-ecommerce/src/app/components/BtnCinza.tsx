"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface BtnCinzaProps {
  texto: string;
  rota: string;
  onClick?: () => void;
}

const BtnCinza: React.FC<BtnCinzaProps> = ({ texto, rota, onClick }) => {
  const currentPath = usePathname();

  return (
    <button onClick={onClick}>
      <Link
        href={`${currentPath}/${rota}`} // Concatena a rota atual com a rota de edição
        className="bg-neutral-300 font-semibold px-5 py-3 rounded-2xl"
      >
        {texto}
      </Link>
    </button>
  );
};

export default BtnCinza;
