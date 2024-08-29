import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import React from "react";
import CardMobileEstoque from "@/app/components/tabela/CardMobileEstoque";

function Estoque() {
  return (
    <body className="w-[100vw] h-[100vh] bg-[#F2F2F2]">
      <main className="h-[100vh] w-[80vw] border-2 border-blue-500 py-3 flex flex-col justify-start mx-auto">
        {/*Pagina*/}

        <div><header className="border-2 border-black">{/**Header Conteudo Mobile*/}
          <HeaderMobile titulo="Estoque"></HeaderMobile>
        </header>

        <section className="border-2 border-black flex justify-around w-full h-[7vh] mt-3">{/**Area de pesquisa*/}
          <form className="border-2 border-red-500 w-[70%] h-full flex ">{/**Barra de pesquisa*/}
            <button className="border-2 border-black w-[8vw] bg-[url('/images/lupinha.png')] bg-no-repeat bg-right bg-contain"></button>{/**Lupinha*/}
            <input className="border-2 border-black w-[35vw] text-left" placeholder="Pesquisar">
            </input>{/**Espaço para digitar o texto*/}
          </form>
          <aside className="border-2 border-black w-[20%] h-full bg-[url('/images/iconeMenuMob.png')] bg-cover bg-no-repeat">{/**Pesquisa por lojas*/}
            Icone loja
          </aside>
        </section></div>

        <section className="my-auto"> {/**CardTabela */}
          <CardMobileEstoque></CardMobileEstoque>
        </section>

      </main>
    </body>
  );
}

export default Estoque;
