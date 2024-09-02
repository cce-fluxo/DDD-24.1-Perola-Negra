import React from "react";
import Header from "../../../components/Header";
import CategoriasNav from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";

const Categoria3 = () => {
  return (
    <div>
      <Header />
      <CategoriasNav />
      <div className="pt-44">
        <TituloCategoria titulo="Categoria 3" />
        <div className="flex flex-wrap w-11/12 mx-auto justify-center">
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
          <Produto
            nome="Nome"
            descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
            preco={"50,97"}
            imagem="/images/placeholder.png"
            variant="secondary"
          ></Produto>
        </div>
      </div>
    </div>
  );
};

export default Categoria3;
