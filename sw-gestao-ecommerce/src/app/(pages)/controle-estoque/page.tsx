import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";
import MenuMobile from "@/app/components/HeaderMobile/MenuMobile";

function Estoque() {
  return (
    <body className="w-[100vw] h-[100vh] bg-white">
      <main className="h-[100vh] w-[80vw] py-3 flex flex-col mx-auto">
        {/*Pagina*/}

        <div>{/**Header + pesquisar Mobile*/}
          <header className="flex flex-col ">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Estoque"></HeaderMobile>
            <span className="text-center mb-3">Nome Filial</span>{/**Nome da loja selecionada*/}
          </header>

          <div className="flex justify-around w-full h-[7vh]">
            {/**Area de pesquisa*/}
            <form className="w-[70%] flex bg-[#E0E0E0] p-2 rounded-xl">
              {/**Barra de pesquisa*/}
              <button className="w-[8vw] bg-[url('/images/lupinha.png')] bg-no-repeat bg-center bg-contain md:w-[6vw] lg:w-[5vw] xl:w-[4vw]"></button>
              {/**Lupinha*/}
              <input
                className="w-[35vw] text-left bg-[#E0E0E0] ml-2"
                placeholder="Buscar"
              ></input>
              {/**Espaço para digitar o texto*/}
            </form>
            <div className="w-[20%] h-full bg-contain bg-no-repeat bg-left">
              <MenuMobile isMenuLoja></MenuMobile>
              {/**Pesquisa por lojas*/}
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto justify-between h-full w-full">
          {/**Conteudo principal*/}
          <CardMobileEstoque nome="Blusa decotada v" cor="amarela" qtdEstoque="20" tamanho="PP"></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
          <CardMobileEstoque></CardMobileEstoque>
        </div>
      </main>
    </body>
  );
}

export default Estoque;
