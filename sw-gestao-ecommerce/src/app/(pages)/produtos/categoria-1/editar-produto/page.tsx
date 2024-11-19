import React from "react";
import Header from "../../../../components/Header";
import EditarProdutoForm from "../../../../components/EditarProdutoForm";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

const EditarProduto: React.FC = () => {
  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <div className="pt-8 px-12 justify-center">
        <EditarProdutoForm idProduto={1}></EditarProdutoForm>
      </div>
    </div>
  );
};

export default EditarProduto;
