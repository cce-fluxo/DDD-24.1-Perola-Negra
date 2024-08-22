import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProdutoProps {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

const Produto: React.FC<ProdutoProps> = ({
  nome,
  descricao,
  preco,
  imagem,
}) => {
  return (
    <div className="bg-white w-1/2 gap-5 py-9 px-16 flex row justify-end">
      <div className="relative w-full h-56">
        <Image
          src={imagem}
          alt={nome}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <Link href={"/produtos/editar-produto"}>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-center text-black">
            Editar produto
          </div>
        </Link>
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
