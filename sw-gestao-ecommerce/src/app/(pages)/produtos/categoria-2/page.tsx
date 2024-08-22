import React from "react";
import Header from "../../../components/Header";
import CategoriasHeader from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";
const Categoria2 = () => {
  return (
    <div>
      <Header></Header>
      <CategoriasHeader></CategoriasHeader>
      <TituloCategoria titulo="Categoria 2"></TituloCategoria>

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

export default Categoria2;
