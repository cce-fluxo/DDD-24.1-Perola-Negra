import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Categorias from "./Categorias";

interface props {
  togglePopUp: () => void;
}

function PopUpEditarCategorias({ togglePopUp }: props) {
  const [categorias, setCategorias] = useState([
    { numero: 1, nome: "Categoria 1" },
    { numero: 2, nome: "Categoria 2" },
    { numero: 3, nome: "Categoria 3" },
    { numero: 4, nome: "Categoria 4" },
  ]);

  // Validação do formulário
  const validationSchema = Yup.object().shape({
    categorias: Yup.array()
      .of(
        Yup.object().shape({
          nome: Yup.string().required("O nome da categoria é obrigatório"),
        })
      )
      .test(
        "nome-duplicado",
        "Nomes de categoria não podem ser duplicados",
        (value) => {
          const nomes = value?.map((cat) => cat.nome.toLowerCase());
          return new Set(nomes).size === nomes?.length;
        }
      ),
  });

  // Configuração do Formik
  const formik = useFormik({
    initialValues: {
      categorias: categorias,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Categorias salvas:", values.categorias);
      togglePopUp(); // Fecha o popup
    },
  });

  const adicionarCategoria = () => {
    const novoNumero = formik.values.categorias.length + 1;
    const novaCategoria = `Nova Categoria ${novoNumero}`;
    formik.setFieldValue("categorias", [
      ...formik.values.categorias,
      { numero: novoNumero, nome: novaCategoria },
    ]);
  };

  const editarNomeCategoria = (index: number, novoNome: string) => {
    const novasCategorias = formik.values.categorias.map((categoria, idx) =>
      idx === index ? { ...categoria, nome: novoNome } : categoria
    );
    formik.setFieldValue("categorias", novasCategorias);
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
          className="h-full grid  grid-rows-3 grid-flow-col gap-2 mt-3 overflow-x-scroll"
        >
          {formik.values.categorias.map((categoria, index) => (
            <Categorias
              key={index}
              numero={categoria.numero}
              nome={categoria.nome}
              editarNome={(novoNome: string) =>
                editarNomeCategoria(index, novoNome)
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
