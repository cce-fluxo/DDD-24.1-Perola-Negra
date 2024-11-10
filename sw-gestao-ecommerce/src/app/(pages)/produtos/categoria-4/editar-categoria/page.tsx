"use client";

import React, { useState } from "react";
import Header from "../../../../components/Header";
import Produto from "../../../../components/Produto";
import TituloCategoria from "../../../../components/TituloCategoria";
import EditarCategoriasNav from "../../../../components/EditarCategoriasNav";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

const EditarCategoria: React.FC = () => {
  const [variant, setVariant] = useState<"primary" | "select">("primary");

  const handleVariantChange = (newVariant: "primary" | "select") => {
    setVariant(newVariant);
  };

  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <div className="flex bg-white gap-8 top-28 fixed left-0 z-10 w-full justify-center">
        <TituloCategoria titulo="Categoria 4" />
        <EditarCategoriasNav
          initialVariant={variant}
          onVariantChange={handleVariantChange}
        />
      </div>
      <div className="flex flex-wrap w-full lg:pt-20 pt-36 justify-center">
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
        <Produto
          nome="Nome"
          descricao="Parte para descrição do prato Lörem ipsum prerad, prosam. Semisofal rafase bötning, inklus..."
          preco={"50,97"}
          imagem="/images/placeholder.png"
          variant={variant}
        />
      </div>
    </div>
  );
};

export default EditarCategoria;
