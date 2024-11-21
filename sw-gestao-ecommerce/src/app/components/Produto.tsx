"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface ProdutoProps {
  id?: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  variant?: "primary" | "secondary" | "select"; // Define "primary" e "secondary" como possíveis valores
  slug: string;
}

const Produto: React.FC<ProdutoProps> = ({
  id,
  nome,
  descricao,
  preco,
  imagem,
  variant,
  slug,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const currentPath = usePathname();
  const handleCheckboxClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div className="bg-white w-full md:w-1/2 gap-5 py-9 px-16 flex row justify-end">
      <div className="relative w-56 h-56 ">
        <div className="relative w-full h-full aspect-square">
          <Image
            src={imagem}
            alt={nome}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        {variant === "secondary" && (
          <Link href={`/produtos/${slug}/editar-produto/${id}`} passHref>
            <button className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-center text-white">
              Editar produto
            </button>
          </Link>
        )}
        {variant === "select" && (
          <div className="absolute top-4 left-4 flex items-center">
            <div
              className={`w-6 h-6 flex justify-center place-items-center rounded-full border-2 border-black cursor-pointer`}
              onClick={handleCheckboxClick}
            >
              {isSelected && (
                <div className="w-4 h-4 bg-black rounded-full"></div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-2xl">{nome}</h1>
        <p className="text-lg">{descricao}</p>
        <p className="text-lg">R${Number(preco).toFixed(2).toString().replace(".", ",")}</p>
      </div>
    </div>
  );
};

export default Produto;
