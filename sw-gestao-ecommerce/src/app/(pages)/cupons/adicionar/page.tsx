"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "@/app/components/Header";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import BotaoSalvar from "@/app/components/BotaoSalvar";

// Definindo o tipo do cupom
interface Cupom {
  nome: string;
  codigo: string;
  detalhes: string;
  validade: string;
}

const CupomSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  codigo: Yup.string().required("Código é obrigatório"),
  detalhes: Yup.string().required("Detalhes são obrigatórios"),
  validade: Yup.date().required("Validade é obrigatória").nullable(),
});

function AdicionarCupons({ adicionarCupom }: { adicionarCupom: (cupom: Cupom) => void }) {
  return (
    <div className="w-full h-full flex justify-center bg-[#F2F2F2]">
      <div className="flex flex-col justify-around h-full w-4/5 py-full lg:w-full">
        <HeaderMobile titulo="Cupons" />
        <div className="hidden lg:flex lg:justify-center w-full h-18 overflow-hidden xl:h-11">
          <Header titulo="Cupons" bg="transparent" />
        </div>
        <div className="hidden w-1/3 h-6 lg:flex lg:ml-20 lg:mb-5 xl:mb-0 xl:w-1/3">
          <NavegacaoCupons activeLink={2} />
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
            <Tabela isAdicionar nomeCupom="Luciano"></Tabela>
          </div>

          <div className="flex justify-around md:text-xl lg:hidden">
            {/**Botao salvar/cancelar*/}
            <BotaoSalvar nome="Salvar"></BotaoSalvar>
            <BotaoSalvar nome="Cancelar"></BotaoSalvar>
          </div>
        </div>

        <div className=" hidden lg:flex justify-end text-sm">
          {/**Botao Salvar Cancelar telas lg*/}
          <div className=" w-[20vw] flex gap-6 mr-10">
            <BotaoSalvar nome="Cancelar"></BotaoSalvar>
            <BotaoSalvar nome="Salvar"></BotaoSalvar>
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

export default AdicionarCupons;
