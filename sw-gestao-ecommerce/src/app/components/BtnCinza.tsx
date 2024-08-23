"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface BtnCinzaProps {
  texto: string;
  rota: string;
}

const BtnCinza: React.FC<BtnCinzaProps> = ({ texto, rota }) => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <button>
      <Link
        href={`${currentPath}/${rota}`} // Concatena a rota atual com a rota de edição
        className="bg-neutral-300 font-semibold p-5 rounded-[20px]"
      >
        {texto}
      </Link>
    </button>
  );
};

export default BtnCinza;
