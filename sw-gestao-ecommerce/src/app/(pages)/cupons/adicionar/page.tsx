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

        <div className="w-full h-3/4 flex flex-col justify-around overflow-y-auto lg:w-4/5 lg:h-2/5 lg:justify-normal lg:mx-auto lg:rounded-t-2xl">
          {/* Tabela com Formik */}
          <Formik
            initialValues={{
              nome: "",
              codigo: "",
              detalhes: "",
              validade: "",
            }}
            validationSchema={CupomSchema}
            onSubmit={(values, { resetForm }) => {
              adicionarCupom(values); // Passa os valores para a página principal
              resetForm(); // Reseta o formulário após o envio
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <table className="w-full text-2xl text-center bg-[#F2F2F2] border-collapse">
                  <thead className="sticky top-0 bg-[#BDBDBD] h-9 text-xl text-white">
                    <tr>
                      <th className="font-light border-none bg-[#BDBDBD]">Cupom</th>
                      <th className="font-light border-none bg-[#BDBDBD]">Código</th>
                      <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
                      <th className="font-light bg-[#BDBDBD]">Válido até</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white border-l-0">
                        <Field name="nome" className="w-full p-2" placeholder="Insira o nome" />
                        <ErrorMessage name="nome" component="div" className="text-red-500" />
                      </td>
                      <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white">
                        <Field name="codigo" className="w-full p-2" placeholder="Digite o código" />
                        <ErrorMessage name="codigo" component="div" className="text-red-500" />
                      </td>
                      <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white">
                        <Field name="detalhes" className="w-full p-2" placeholder="Insira detalhes" />
                        <ErrorMessage name="detalhes" component="div" className="text-red-500" />
                      </td>
                      <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white border-r-0">
                        <Field name="validade" type="date" className="w-full p-2" />
                        <ErrorMessage name="validade" component="div" className="text-red-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end gap-6 mt-4">
                  <BotaoSalvar nome="Cancelar" />
                  <button
                    type="submit"
                    className="py-1 px-6 bg-neutral-500 text-white rounded-xl hover:bg-white hover:text-[#B0B0B0]"
                  >
                    Salvar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AdicionarCupons;
