import React from "react";
import Header from "../../../components/header";
import CategoriasHeader from "../../../components/CategoriasHeader";
import Produto from "../../../components/Produto";

const Categoria3 = () => {
  return (
    <div>
      <Header></Header>
      <CategoriasHeader></CategoriasHeader>
      <div className="pt-52 w-72 py-3 px-7 text-3xl bg-neutral-100 font-semibold flex justify-end">
        Categoria 3
      </div>
      <div className="flex flex-wrap w-11/12">
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
        ></Produto>
      </div>
    </div>
  );
};

export default Categoria3;
