"use client";
import React, { useState, useEffect } from "react";
import Categorias from "./Categorias";
import api from "@/services/axios";
import { useFormik } from "formik";
import * as Yup from "yup";

interface props {
  togglePopUp: () => void;
}

function PopUpEditarCategorias({ togglePopUp }: props) {
  const [categorias, setCategorias] = useState([]);

  // Carregar as categorias ao montar o componente
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await api.get("/categoria");
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };
    getCategorias();
  }, []);

  const formik = useFormik({
    initialValues: {
      categorias: categorias,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      categorias: Yup.array()
        .of(
          Yup.object({
            nome: Yup.string().required("O nome da categoria é obrigatório"),
          })
        )
        .test(
          "nome-duplicado",
          "Nomes de categoria não podem ser duplicados",
          (value) => {
            const nomes = value?.map((cat) => cat.nome.toLowerCase());
            return new Set(nomes).size === nomes.length;
          }
        ),
    }),
    onSubmit: async (values) => {
      try {
        await api.patch("/categoria", values.categorias); // Ajuste para enviar todas as categorias no formato esperado
        console.log("Categorias salvas:", values.categorias);
        togglePopUp(); // Fecha o popup após salvar
      } catch (error) {
        console.error("Erro ao salvar categorias:", error);
      }
    },
  });

  // Adicionar nova categoria com ID único
  const adicionarCategoria = async () => {
    try {
      const response = await api.post("/categoria", { nome: `Nova Categoria` });
      const novaCategoria = response.data; // Supondo que o backend retorne o objeto completo da nova categoria criada

      formik.setFieldValue("categorias", [
        ...formik.values.categorias,
        novaCategoria, // Adiciona nova categoria com ID e nome
      ]);
    } catch (error) {
      console.error("Erro ao adicionar categoria:", error);
    }
  };

  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="lg:w-1/2 h-3/5 w-3/4 flex flex-col justify-between p-6 rounded-xl bg-[#F5F5F5]">
        <div className="h-[15%] flex justify-end items-center">
          <p className="mx-auto font-bold text-xl md:text-4xl">Categorias</p>
          <button
            title="Cancelar"
            onClick={togglePopUp}
            className='p-5 bg-[url("/icons/iconeX.png")] bg-no-repeat bg-center'
          ></button>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="h-full grid grid-rows-3 grid-flow-col gap-2 mt-3 overflow-x-scroll"
        >
          {formik.values.categorias.map((categoria, index) => (
            <Categorias
              key={categoria.id} // Usa o ID único
              id={categoria.id}
              nome={categoria.nome}
              editarNome={(novoNome) =>
                formik.setFieldValue(`categorias.${index}.nome`, novoNome)
              }
            />
          ))}

          <button
            type="button"
            onClick={adicionarCategoria}
            className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2 text-sm md:text-xl"
          >
            + Adicionar categoria
          </button>
        </form>

        {formik.errors.categorias &&
          typeof formik.errors.categorias === "string" && (
            <div className="text-red-500 text-center">
              {formik.errors.categorias}
            </div>
          )}

        <div className="flex justify-center h-[15%] items-center">
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="py-1 px-7 rounded-3xl bg-black text-white mt-4"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpEditarCategorias;
