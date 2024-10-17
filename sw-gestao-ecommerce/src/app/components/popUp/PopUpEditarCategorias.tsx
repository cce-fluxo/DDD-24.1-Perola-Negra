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

  // Adiciona uma nova categoria com o nome "Nova Categoria" e incrementa o número
  const adicionarCategoria = () => {
    const novoNumero = categorias.length + 1;
    setCategorias([
      ...categorias,
      { numero: novoNumero, nome: "Nova Categoria" },
    ]);
  };

  // Atualiza o nome da categoria ao editar
  const editarNomeCategoria = (index: number, novoNome: string) => {
    const novasCategorias = categorias.map((categoria, idx) =>
      idx === index ? { ...categoria, nome: novoNome } : categoria
    );
    setCategorias(novasCategorias);
  };

  return (
    <div className="fixed w-[100vw] h-[100vh] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[80vw] h-[60vh] lg:w-[60vw] lg:h-[55vh] flex flex-col justify-between p-6 rounded-xl bg-[#F5F5F5]">
        <div className="h-[15%] flex justify-end items-center">
          <span className="mx-auto font-bold text-xl md:text-4xl">
            Categorias
          </span>
          <button
            title="btn"
            onClick={togglePopUp}
            className='p-5 bg-[url("/icons/iconeX.png")] bg-no-repeat bg-center'
          ></button>
        </div>

        <div className="h-[65%] grid grid-cols-2 grid-rows-3 grid-flow-col gap-2 mt-3">
          {categorias.map((categoria, index) => (
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
            onClick={adicionarCategoria}
            className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2 text-sm md:text-xl"
          >
            + Adicionar categoria
          </button>
        </div>

        <div className="flex justify-center h-[15%] items-center">
          <button
            onClick={togglePopUp}
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
