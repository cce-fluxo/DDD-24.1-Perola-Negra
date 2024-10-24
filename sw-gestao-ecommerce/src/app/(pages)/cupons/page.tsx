"use client"; // Certifique-se de que esse componente é client-side

import React, { useState } from "react";
import Header from "@/app/components/Header";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

function Cupons() {
  // Estado local para os cupons
  const [cupons, setCupons] = useState<{ cupom: string; codigo: string; detalhes: string; validade: string; }[]>([]);

  // Função para adicionar um novo cupom
  const adicionarCupom = (novoCupom: { cupom: string; codigo: string; detalhes: string; validade: string }) => {
    setCupons([...cupons, novoCupom]); // Adiciona o novo cupom à lista de cupons
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]">
      {/*"Body" da página*/}

      <div className="flex flex-col justify-around h-[100vh] w-[80vw] py-3 lg:w-[100vw]">
        {/*Pagina*/}

        <HeaderMobile titulo="Cupons"></HeaderMobile>
        {/**Header de dispositivos mobile + md */}

        <div className="hidden lg:flex lg:justify-center w-full h-[18vh] overflow-hidden xl:h-[11vh]">
          {/**Header para dispositivos lg*/}
          <Header titulo="Cupons" bg="transparent"></Header>
        </div>

        <div className="hidden w-[34vw] h-[6vh] lg:flex lg:ml-20 lg:mb-5 xl:mb-0 xl:w-[36vw]">
          {/*NavegacaoCupom LG --> Só ativa para telas grandes*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] overflow-y-auto lg:w-[85vw] lg:h-[60vh] lg:mx-auto lg:rounded-t-2xl">
          {/**rounded-t-2xl impede que as celulas da tabela vazem pela head ao scrollar*/}
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
            {/* Mais cartões de cupom aqui, se necessário */}
          </div>

          {/*Conteúdo lg */}
          <div className="hidden lg:flex">
            {/* Passando a lista de cupons e a função adicionarCupom para o componente Tabela */}
            <Tabela cupons={cupons} adicionarCupom={adicionarCupom}></Tabela>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/**Navegacao para dispositivos mobile*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default Cupons;

