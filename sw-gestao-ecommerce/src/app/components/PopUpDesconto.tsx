"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface props {
  togglePopUp: () => void;
}

const PopUpDesconto: React.FC<props> = ({ togglePopUp }) => {
  // Função de formatação de porcentagem
  const handlePercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    let value = e.target.value.replace("%", ""); // Remove qualquer % extra
    const numValue = Number(value);

    if (numValue <= 100) {
      setFieldValue("desconto", numValue + "%");
    } else {
      setFieldValue("desconto", "100%");
    }
  };

  // Função de formatação de data
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    if (value.length > 10) value = value.slice(0, 10); // não permitir mais de 8 caracteres
    setFieldValue("data", value);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl w-[45vw] pl-20 py-8 pr-10">
        <div className="flex flex-row w-full h-full">
          <div className="flex-auto">
            <Formik
              initialValues={{ desconto: "", data: "" }}
              onSubmit={(values) => {
                // Lógica para salvar os dados
                console.log("Valores do formulário:", values);
                togglePopUp();
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="flex flex-col items-center h-full">
                  <div className="flex-auto font-bold text-3xl pb-4">
                    DESCONTO
                  </div>
                  <div className="flex-auto text-center text-lg pb-8">
                    Ao salvar, eu concordo que estarei aplicando esse desconto
                    em todos os produtos da loja até o dia estipulado.
                  </div>
                  <div className="flex flex-row flex-auto gap-16 pb-4">
                    <Field
                      name="desconto"
                      placeholder="0%"
                      value={values.desconto}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handlePercentageChange(e, setFieldValue)
                      }
                      className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2"
                    />
                    <Field
                      name="data"
                      placeholder="dd/mm/yyyy"
                      value={values.data}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleDateChange(e, setFieldValue)
                      }
                      className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2"
                    />
                  </div>
                  <div className="flex flex-row flex-auto gap-16 pb-8">
                    <div className="w-56 text-center text-lg">Porcentagem</div>
                    <div className="w-56 text-center text-lg">Data</div>
                  </div>
                  <button
                    type="submit"
                    className="bg-black flex-auto w-[7vw] text-white rounded-3xl p-2"
                  >
                    Salvar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            <button className="font-bold text-3xl px-2" onClick={togglePopUp}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpDesconto;
