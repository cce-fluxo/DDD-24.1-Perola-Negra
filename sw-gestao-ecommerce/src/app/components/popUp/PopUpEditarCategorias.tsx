"use client";
import React, { useState, useEffect } from "react";
import Categorias from "./Categorias";
import api from "@/services/axios";

interface Categoria {
  id: number;
  nome: string;
}

interface props {
  togglePopUp: () => void;
}

function PopUpEditarCategorias({ togglePopUp }: props) {
  const [categorias, setCategorias] = useState<Categoria[]>([]); // Define o tipo do estado

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

  const adicionarCategoria = async () => {
    try {
      const response = await api.post("/categoria", { nome: "Nova Categoria" });
      const novaCategoria: Categoria = response.data;
      setCategorias((prevCategorias) => [...prevCategorias, novaCategoria]); // Atualiza o estado corretamente
    } catch (error) {
      console.error("Erro ao adicionar categoria:", error);
    }
  };

  const salvarCategorias = async () => {
    try {
      const promises = categorias.map((categoria) =>
        api.patch(`/categoria/${categoria.id}`, { nome: categoria.nome })
      );
      await Promise.all(promises); // Aguarda todas as requisições PATCH serem concluídas
      console.log("Categorias atualizadas com sucesso.");
      togglePopUp(); // Fecha o popup
    } catch (error) {
      console.error("Erro ao salvar categorias:", error);
    }
  };

  const atualizarCategoria = (id: number, novoNome: string) => {
    setCategorias((prevCategorias) =>
      prevCategorias.map((categoria) =>
        categoria.id === id ? { ...categoria, nome: novoNome } : categoria
      )
    );
  };

  const deletarCategoria = (id: number) => {
    setCategorias((prevCategorias) =>
      prevCategorias.filter((categoria) => categoria.id !== id)
    );
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

        <div className="h-full grid grid-rows-3 grid-flow-col gap-2 mt-3 overflow-x-scroll">
          {categorias.map((categoria) => (
            <Categorias
              key={categoria.id}
              id={categoria.id}
              nome={categoria.nome}
              atualizarNome={atualizarCategoria}
              deletarCategoria={deletarCategoria}
            />
          ))}

          <button
            type="button"
            onClick={adicionarCategoria}
            className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2 text-sm md:text-xl"
          >
            + Adicionar categoria
          </button>
        </div>

        <div className="flex justify-center h-[15%] items-center">
          <button
            type="button"
            onClick={salvarCategorias}
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
