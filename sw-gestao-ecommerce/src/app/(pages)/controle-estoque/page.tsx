import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";
import AreaPesquisar from "@/app/components/AreaPesquisar";
import Header from "@/app/components/Header";
import TabelaEstoque from "@/app/components/tabela/TabelaEstoque";

function Estoque() {
  return (
    <body className="w-[100vw] h-[100vh] bg-white ">
      <main className="h-[100vh] w-[80vw] py-3 flex flex-col mx-auto lg:w-[100vw]">
        {/*Pagina*/}

        <div className="">{/**Header + pesquisar*/}
          <div className="flex flex-col lg:hidden">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Estoque"></HeaderMobile>
            <span className="text-center mb-3">Nome Filial</span>{/**Nome da loja selecionada*/}
          </div>

          <div className="hidden lg:flex w-full h-[16vh]">{/**Header para dispositivos lg*/}
            <Header></Header>

          </div>
          <div className="hidden lg:flex items-baseline gap-6 xl:mb-0 ml-20">
            <span className="text-center text-3xl font-bold lg:mb-3 xl:text-4xl">Controle de estoque</span>{/**Nome da loja selecionada*/}
            <span className="text-center ">Nome Filial Selecionada</span>{/**Nome da loja selecionada*/}
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

        <div className="hidden lg:flex rounded-t-2xl w-[88vw] overflow-y-auto mt-4 ml-20 justify-center">
          <TabelaEstoque></TabelaEstoque>
        </div>
      </main>
    </body>
  );
}

export default Estoque;
