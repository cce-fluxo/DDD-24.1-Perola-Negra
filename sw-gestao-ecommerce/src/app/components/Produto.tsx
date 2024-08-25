"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProdutoProps {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  variant?: "primary" | "secondary" | "select"; // Define "primary" e "secondary" como possíveis valores
}

const Produto: React.FC<ProdutoProps> = ({
  nome,
  descricao,
  preco,
  imagem,
  variant,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div className="bg-white w-full md:w-1/2 gap-5 py-9 px-16 flex row justify-end">
      <div className="relative w-56 h-56 flex-shrink-0">
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
          <Link href={"/produtos/editar-produto"}>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-center text-black">
              Editar produto
            </div>
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
        <p className="text-lg">R${preco}</p>
      </div>
    </div>
  );
};

export default Produto;
