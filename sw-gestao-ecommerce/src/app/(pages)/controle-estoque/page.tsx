import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";
import AreaPesquisar from "@/app/components/AreaPesquisar";
import Header from "@/app/components/Header";
import TabelaEstoque from "@/app/components/tabela/TabelaEstoque";

function Estoque() {
  return (
    <body className="w-screen h-screen bg-white ">
      <main className="h-[100vh] w-[80vw] py-3 flex flex-col mx-auto lg:w-[100vw]">
        {/*Pagina*/}

        <div className="">
          {/**Header + pesquisar*/}
          <div className="flex flex-col lg:hidden">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Estoque"></HeaderMobile>
            <span className="text-center mb-3">Nome Filial</span>
            {/**Nome da loja selecionada*/}
          </div>

          <div className="hidden lg:flex w-full h-[16vh]">
            {/**Header para dispositivos lg*/}
            <Header titulo="Controle de Estoque"></Header>
          </div>

          <div className="lg:ml-20 lg:mt-14 xl:mt-0">
            <AreaPesquisar></AreaPesquisar>
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto justify-between mt-2 h-full w-full lg:hidden">
          <div className="lg:hidden ">
            {/**Conteudo principal*/}
            <CardMobileEstoque
              nome="Blusa decotada v"
              cor="amarela"
              qtdEstoque="20"
              tamanho="PP"
            ></CardMobileEstoque>
            <CardMobileEstoque></CardMobileEstoque>
            <CardMobileEstoque></CardMobileEstoque>
            <CardMobileEstoque></CardMobileEstoque>
            <CardMobileEstoque></CardMobileEstoque>
            <CardMobileEstoque></CardMobileEstoque>
          </div>
        </div>

        <div className="hidden lg:flex rounded-t-2xl w-[88vw] overflow-y-auto mt-4 ml-20 justify-center">
          <TabelaEstoque></TabelaEstoque>
        </div>
      </main>
    </body>
  );
}

export default Estoque;
