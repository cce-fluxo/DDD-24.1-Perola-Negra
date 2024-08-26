import React from "react";
import Header from "@/app/components/Header";
import TituloCategoria from "@/app/components/TituloCategoria";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";
import MenuMobile from "@/app/components/MenuMobile";
import Link from "next/link";

function Cupons() {
  {

  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]">
      {/*"Body" da página*/}

      <div className="flex flex-col justify-around h-[100vh] w-[80vw] py-3 lg:w-[99vw]">
        {/*Pagina*/}

        <div className="w-full h-[8vh] flex justify-between items-center overflow-visible lg:h-[15vh] lg:mx-3 border-2 border-black">{/*Navegacao Mobile*/}
          <div className="ml-[8vw]">
            Cupons
          </div>{/*Titulo*/}

          <div className="w-[18vw] h-full border-2 border-pink-600">
            <MenuMobile></MenuMobile>
          </div>
        </div>

        <div className="hidden w-[40vw] h-[7vh] lg:flex lg:ml-3">
          {/*Navegacao LG*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] overflow-y-auto lg:w-[85vw] lg:h-[65vh] lg:mx-auto lg:rounded-t-2xl">{/**rounded-t-2xl impede que as celulas da tabela vazem pela head ao scrollar*/}
          {/* Conteudo principal*/}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:hidden">
            {/* Conteúdo mobile até md */}
            <CardMobile
              nome="CUPOM10"
              validade="12/03/2024"
              desconto="25"
              qtdUsada="29"
              codigo="#123123"
            ></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
          </div>

          {/*Conteúdo LG*/}
          <div className="hidden lg:flex">
            <Tabela></Tabela>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/*navegacao mobile*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
