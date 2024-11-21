import React from "react";
import Header from "@/app/components/Header";
import EditarProdutoForm from "@/app/components/EditarProdutoForm";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

interface parametros {
  params: number;
}

export default function EditarProduto({ params }: parametros) {
  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <div className="pt-8 px-12 justify-center">
        <EditarProdutoForm idProduto={params.infoProduto}></EditarProdutoForm>
      </div>
    </div>
  );
}
