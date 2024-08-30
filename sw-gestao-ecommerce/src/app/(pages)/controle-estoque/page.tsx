import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";
import MenuMobile from "@/app/components/HeaderMobile/MenuMobile";

function Estoque() {
  return (
    <body className="w-[100vw] h-[100vh] bg-white border-2 border-red-800">
      <main className="h-[100vh] w-[80vw] py-3 flex flex-col mx-auto border-2 border-black lg:w-[90vw]">
        {/*Pagina*/}

        <div className="border-2 border-yellow-500">{/**Header + pesquisar*/}
          <header className="flex flex-col border-2 border-red-700 lg:hidden">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Estoque"></HeaderMobile>
            <span className="text-center mb-3">Nome Filial</span>{/**Nome da loja selecionada*/}
          </header>

          <header className="hidden lg:flex">
            
          </header>

          <div className="flex justify-around items-center w-full h-[7vh]  border-2 border-black lg:justify-start lg:gap-10">
            {/**Area de pesquisa*/}
            <form className="w-[70%] h-full flex bg-[#E0E0E0] p-2 rounded-xl border-2 border-black lg:w-[50%]">
              {/**Barra de pesquisa*/}
              <button className="w-[8vw] bg-[url('/images/lupinha.png')] bg-no-repeat bg-center bg-contain md:w-[6vw] lg:w-[5vw] xl:w-[4vw] "></button>
              {/**Lupinha*/}
              <input
                className="w-[35vw] text-left bg-[#E0E0E0] ml-2"
                placeholder="Buscar"
              ></input>
              {/**Espaço para digitar o texto*/}
            </form>
            <div className="w-[20%] h-full bg-contain bg-no-repeat bg-left border-2 border-orange-500 lg:rounded-xl lg:bg-[#E0E0E0] lg:h-[8vh]">

              <div className="w-full h-full lg:hidden">
                <MenuMobile isMenuLoja></MenuMobile>{/**Menu Mobile*/}
              </div>

              <div className="w-full h-[60vh] hidden flex-col justify-between lg:flex rounded-xl bg-red-800">{/**MenuEscolherLoja lg*/}

                <div className="w-full h-[7vh] flex justify-around border-2 border-black">{/**Setinha+titulo*/}
                  <div className="border-2 border-gray-600 flex items-center w-[65%]">Escolher loja</div>
                  <button className="border-2 border-white text-center w-[25%]">Botao</button>
                </div>

                <div className="w-[25vw] h-[70%] border-2 border-green-600 bg-green-400 rounded-xl"> {/**Menu*/}
                  Menu
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto justify-between h-full w-full lg:hidden">
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
