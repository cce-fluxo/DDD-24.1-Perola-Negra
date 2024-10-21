"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import BotaoSalvar from "@/app/components/BotaoSalvar"; // Importação do componente BotaoSalvar

interface Props {
  isAdicionar?: boolean; // Verifica se a tabela é da página adicionarCupons ou Cupons.
  nomeCupom?: string;
  cupons: { cupom: string; codigo: string; detalhes: string; validade: string }[]; // Adiciona a propriedade cupons
  adicionarCupom: (novoCupom: { cupom: string; codigo: string; detalhes: string; validade: string }) => void; // Função para adicionar cupons
}


const validationSchema = Yup.object().shape({
  cupom: Yup.string().required("Nome é obrigatório"),
  codigo: Yup.string().required('Código é obrigatório'),
  detalhes: Yup.string().required('Detalhes são obrigatórios'),
  validade: Yup.date().required('Data de validade é obrigatória'),
});

const Tabela: React.FC<Props> = ({ isAdicionar = false, nomeCupom }) => {
  return (
    <Formik
      initialValues={{ cupom: "", codigo: "", detalhes: "", validade: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // Aqui você pode fazer o que quiser com os valores
      }}
    >
      {({ errors, touched, submitForm }) => (
        <Form className="flex flex-col h-screen"> {/* Adiciona flex para ocupar a tela inteira */}
          <table className="w-[85vw] text-2xl text-center bg-[#F2F2F2] border-collapse">
            <thead className="sticky top-0 bg-[#BDBDBD] h-[9vh] text-xl text-white">
              {!isAdicionar && (
                <>
                  <tr>
                    <th className="font-light border-none bg-[#BDBDBD]">Cupom</th>
                    <th className="font-light border-none bg-[#BDBDBD]">Código</th>
                    <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
                    <th className="font-light border-none bg-[#BDBDBD]">Qt. de usos</th>
                    <th className="font-light bg-[#BDBDBD]">Válido até</th>
                  </tr>
                </>
              )}

              {isAdicionar && (
                <>
                  <tr>
                    <th className="font-light border-none bg-[#BDBDBD]">Cupom</th>
                    <th className="font-light border-none bg-[#BDBDBD]">Código</th>
                    <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
                    <th className="font-light bg-[#BDBDBD]">Válido até</th>
                  </tr>
                </>
              )}
            </thead>
            <tbody className={`${isAdicionar ? 'h-[15vh] w-[85vw]' : ''}`}>
              {!isAdicionar && (
                <>
                  <tr>
                    <td className="border-2 py-8 px-14 border-[#E0E0E0] border-b-0 border-l-0 bg-white">DDIVOS</td>
                    <td className="border-2 py-5 px-4 border-[#E0E0E0] border-b-0 bg-white">#123456789</td>
                    <td className="border-2 py-5 px-4 border-[#E0E0E0] border-b-0 bg-white">25% de <br />desconto</td>
                    <td className="border-2 py-5 px-4 border-[#E0E0E0] border-b-0 bg-white">563</td>
                    <td className="border-2 py-5 px-4 border-[#E0E0E0] border-b-0 border-r-0 bg-white">23/05/2023</td>
                  </tr>
                </>
              )}

              {isAdicionar && (
                <>
                  <tr>
                    <td className="border-2 border-[#E0E0E0] border-b-0 border-l-0 bg-white">
                      <Field name="cupom" placeholder="Digite o cupom" className="w-full text-center" />
                      {errors.cupom && touched.cupom ? <div className="text-red-500">{errors.cupom}</div> : null}
                    </td>
                    <td className="border-2 border-[#E0E0E0] border-b-0 bg-white">
                      <Field name="codigo" placeholder="Digite o código" className="w-full text-center" />
                      {errors.codigo && touched.codigo ? <div className="text-red-500">{errors.codigo}</div> : null}
                    </td>
                    <td className="border-2 px-0 border-[#E0E0E0] border-b-0 bg-white">
                      <Field name="detalhes" placeholder="Insira detalhes do cupom" className="w-full text-center" />
                      {errors.detalhes && touched.detalhes ? <div className="text-red-500">{errors.detalhes}</div> : null}
                    </td>
                    <td className="border-2 px-0 border-[#E0E0E0] border-b-0 border-r-0 bg-white">
                      <Field name="validade" type="date" className="w-full text-center" />
                      {errors.validade && touched.validade ? <div className="text-red-500">{errors.validade}</div> : null}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>

          {/* Botões Salvar/Cancelar */}
          {isAdicionar && ( // Verificação para renderizar os botões somente se isAdicionar for true
            <div className="flex items-end justify-end"> {/* Usando flex-grow para empurrar os botões para baixo */}
              <div className="h-[28vw] flex gap-6">
                <BotaoSalvar nome="Cancelar" onClick={() => console.log("Cancelar")} />
                <BotaoSalvar nome="Salvar" onClick={submitForm} /> {/* Botão Salvar que dispara o submit */}
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Tabela;
