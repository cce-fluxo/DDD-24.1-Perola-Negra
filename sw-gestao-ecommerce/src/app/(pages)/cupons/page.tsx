"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

function Cupons() {
  const [cupons, setCupons] = useState([
    { nome: "CUPOM10", codigo: "#123123", detalhes: "25% de desconto", validade: "12/03/2024", qtdUsada: 29 },
  ]);

  const adicionarCupom = (cupom: { nome: string; codigo: string; detalhes: string; validade: string; qtdUsada: number; }) => {
    setCupons([...cupons, cupom]);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]">
      <div className="flex flex-col justify-around h-[100vh] w-[80vw] py-3 lg:w-[100vw]">
        <HeaderMobile titulo="Cupons"></HeaderMobile>
        <div className="hidden lg:flex lg:justify-center w-full h-[18vh] overflow-hidden xl:h-[11vh]">
          <Header titulo="Cupons" bg="transparent"></Header>
        </div>

        <div className="hidden w-[34vw] h-[6vh] lg:flex lg:ml-20 lg:mb-5 xl:mb-0 xl:w-[36vw]">
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] overflow-y-auto lg:w-[85vw] lg:h-[60vh] lg:mx-auto lg:rounded-t-2xl">
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:hidden">
            {/* Renderização mobile */}
            {cupons.map((cupom, index) => (
              <CardMobile
                key={index}
                nome={cupom.nome}
                validade={cupom.validade}
                desconto={cupom.detalhes}
                codigo={cupom.codigo}
              />
            ))}
          </div>

          <div className="hidden lg:flex">
            {/* Renderização da tabela para lg */}
            <Tabela cupons={cupons}></Tabela>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
