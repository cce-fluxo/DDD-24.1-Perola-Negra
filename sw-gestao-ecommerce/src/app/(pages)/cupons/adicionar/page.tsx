"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";
import Tabela from "@/app/components/tabela/Tabela";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import BotaoSalvar from "@/app/components/BotaoSalvar";
import { Field, Formik, Form, ErrorMessage, useFormik, useFormikContext } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import api from "@/services/axios";


function adicionarCupons() {
  const router = useRouter();
  const isSubmiting = useFormikContext();
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
          <Formik
            initialValues={{ nome: "", codigo: "", PR_desconto: "", DT_validade: "" }}
            validationSchema={Yup.object({
              nome: Yup.string().required("Bota o nome do cupom, lek!"),
              codigo: Yup.string().required("Epa epa, falta o codigo, colega!"),
              PR_desconto: Yup.number().max(100, 'o valor maximo é 100').min(0, 'o valor minimo é 0').required('Jogador, faltou o desconto'),
              DT_validade: Yup.date().min(new Date(), 'A data deve ser maior que a data atual, seloko').required('E a data, amigao?'),

            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              console.log(isSubmiting);
              postCupom(values);
              router.push('/cupons');
              setSubmitting(false);
            }}>

            {({ resetForm}) => (
                <Form>
                  <div className="hidden lg:flex">
                    <Tabela isAdicionar></Tabela>
                  </div>

                  <div className="flex justify-around md:text-xl lg:hidden">{/*BOTAO DE CELULAR*/}
                    <BotaoSalvar nome="Salvar"></BotaoSalvar>
                    <BotaoSalvar nome="Cancelar"></BotaoSalvar>
                  </div>

                  <div className=" hidden lg:flex justify-end text-sm">
                    {/**Botao Salvar Cancelar telas lg*/}
                    <div className="mt-[25vh] flex gap-6">
                      <BotaoSalvar nome="Cancelar" onClick={() => resetForm()}></BotaoSalvar>
                      <BotaoSalvar nome="Salvar" tipo="submit"></BotaoSalvar>
                    </div>
                  </div>
                </Form>)}
          </Formik>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/**Navegacao para dispositivos mobile*/}
          <NavegacaoCupons activeLink={2}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );

  async function postCupom (values:any) {
    try {
      const response = await api.post("/cupom", 
        {
          nome: values.nome,
          codigo: values.codigo,
          PR_desconto: Number(values.PR_desconto),
          DT_validade: values.DT_validade
        }
      );
      console.log('Resposta:', response.data);
  
    } catch (error:any) {
      console.log("deu errado men: ", error.response.data);
    }
  }

}

export default adicionarCupons;
