import React from "react";
import Link from "next/link";

interface BtnCinzaProps {
  texto: string;
  rota: string;
}

const BtnCinza: React.FC<BtnCinzaProps> = ({ texto, rota }) => {
  return (
    <button>
      <Link
        href={rota}
        className="bg-neutral-300 font-semibold p-5 rounded-[20px]"
      >
        {texto}
      </Link>
    </button>
  );
};

export default BtnCinza;
