import React from "react";
import Header from "../../../../components/Header";
import ProdutoForm from "../../../../components/ProdutoForm";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

const AdicionarProduto: React.FC = () => {
  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <div className="pt-10 px-12 justify-center">
        <ProdutoForm></ProdutoForm>
        <ProdutoForm></ProdutoForm>
        <ProdutoForm></ProdutoForm>
      </div>
    </div>
  );
};

export default AdicionarProduto;
