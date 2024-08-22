import React from "react";
import Header from "../../../components/Header";
import CategoriasHeader from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";
import EditarCategoriasNav from "../../../components/EditarCategoriasNav";

const EditarCategoria = () => {
  return (
    <div>
      <Header></Header>
      <CategoriasHeader></CategoriasHeader>
      <div className="flex row">
        <TituloCategoria titulo="Categoria 1"></TituloCategoria>
        <EditarCategoriasNav></EditarCategoriasNav>
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

export default EditarCategoria;
