"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

function adicionarCupons() {
  // Inicialize cupons como um array vazio
  const [cupons, setCupons] = useState<{ cupom: string; codigo: string; detalhes: string; validade: string }[]>([]);

  // Função para adicionar cupons ao array
  const adicionarCupom = (novoCupom: { cupom: string; codigo: string; detalhes: string; validade: string }) => {
    setCupons([...cupons, novoCupom]); // Adiciona o novo cupom ao array de cupons
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
          <NavegacaoCupons activeLink={2}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] flex flex-col justify-around overflow-y-auto lg:w-[85vw] lg:h-[55vh] lg:justify-normal lg:mx-auto lg:rounded-t-2xl">
          {/**rounded-t-2xl impede que as celulas da tabela vazem pela head ao scrollar*/}
          {/* Conteudo principal*/}
          <div className="lg:hidden md:h-[30vh] flex justify-center items-center">
            {/* Conteúdo mobile até md */}
            <CardMobile
              validade="__/__/____"
              desconto="__"
              qtdUsada="___"
              codigo="#123123"
              isAdicionar
            ></CardMobile>
          </div>

          {/*Conteúdo lg */}
          <div className="hidden lg:flex">
            <Tabela isAdicionar nomeCupom="Luciano" cupons={cupons} adicionarCupom={adicionarCupom}></Tabela>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/**Navegacao para dispositivos mobile*/}
          <NavegacaoCupons activeLink={2}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default adicionarCupons;
