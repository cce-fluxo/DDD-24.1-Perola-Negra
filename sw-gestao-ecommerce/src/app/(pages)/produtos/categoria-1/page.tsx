import React from "react";
import Header from "../../../components/Header";
import CategoriasNav from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";

const Categoria1 = () => {
  return (
    <div>
      <Header></Header>
      <CategoriasNav></CategoriasNav>
      <div className="pt-52">
        <TituloCategoria titulo="Categoria 1"></TituloCategoria>
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
    </div>
  );
};

export default Categoria1;
