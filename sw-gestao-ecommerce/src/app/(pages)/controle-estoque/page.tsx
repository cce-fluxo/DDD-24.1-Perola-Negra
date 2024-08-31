import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";
import MenuMobile from "@/app/components/HeaderMobile/MenuMobile";
import MenuEscolherLoja from "@/app/components/MenuEscolherLoja";
import AreaPesquisar from "@/app/components/AreaPesquisar";
import Header from "@/app/components/Header";
import TabelaEstoque from "@/app/components/tabela/TabelaEstoque";

function Estoque() {
  return (
    <body className="w-[100vw] h-[100vh] bg-white border-2 border-red-800">
      <main className="h-[100vh] w-[80vw] py-3 flex flex-col mx-auto border-2 border-blue-600 lg:w-[100vw]">
        {/*Pagina*/}

        <div className="border-2 border-yellow-500">{/**Header + pesquisar*/}
          <div className="flex flex-col border-2 border-red-700 lg:hidden">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Estoque"></HeaderMobile>
            <span className="text-center mb-3">Nome Filial</span>{/**Nome da loja selecionada*/}
          </div>

          <div className="hidden lg:flex w-full h-[18vh] border-2 border-green-500">{/**Header para dispositivos lg*/}
            <Header></Header>
          </div>
          <div className="hidden lg:flex text-3xl font-bold lg:mb-3 xl:mb-0 xl:text-4xl ml-20">
            Controle de estoque
          </div>
          <div className="lg:ml-20">
            <AreaPesquisar></AreaPesquisar>
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto justify-between h-full w-full lg:hidden">
          <div className="lg:hidden">
          {/**Conteudo principal*/}
          <CardMobileEstoque nome="Blusa decotada v" cor="amarela" qtdEstoque="20" tamanho="PP"></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
        </div>
      </div>

        <div className="hidden lg:flex border-2 border-green-500 w-[80vw] mt-8 ml-20">
          <TabelaEstoque></TabelaEstoque>
        </div>
      </main>
    </body>
  );
}

export default Estoque;
