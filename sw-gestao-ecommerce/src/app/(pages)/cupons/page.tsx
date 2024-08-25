import React from "react";
import Header from "@/app/components/Header";
import TituloCategoria from "@/app/components/TituloCategoria";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";

function Cupons() {
  {
    /*bg-[#F2F2F2] */
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]">
      {/*"Body" da página*/}

      <div className="flex flex-col justify-around h-[100vh] w-[80vw] py-3 lg:w-[99vw]">
        {/*conteudo da página*/}

        <div className="w-full h-[10vh] flex lg:h-[15vh]">
          {/*conteudo 1 da página*/}
          <TituloCategoria titulo="Cupons Ativos"></TituloCategoria>
          {/*Nome da página*/}
        </div>

        <div className="hidden w-[38vw] h-[7vh] lg:flex">
          {/*Navegacao conteúdo LG*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] overflow-y-auto lg:w-[95vw] lg:h-[65vh] lg:mx-auto lg:rounded-t-3xl">{/**rounded-t-3xl impede que as celulas da tabela vazem pela head*/}
          {/* Conteudo 2 da pagina*/}
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

          {/* Conteúdo lg e acima */}
          <div className="hidden lg:flex">
            <Tabela></Tabela>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/*conteudo 3 da página*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
