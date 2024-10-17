import React from "react";
import Header from "../../../components/Header";
import CategoriasNav from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

const Categoria1 = () => {
  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <CategoriasNav />
      <div className="">
        <TituloCategoria titulo="Categoria 1" />
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

export default Categoria1;
