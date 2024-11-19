"use client";
import api from "@/services/axios";
import React, { useState } from "react";

interface props {
  id: number;
  nome: string;
  atualizarNome: (id: number, novoNome: string) => void;
  deletarCategoria: (id: number) => void;
}

function Categorias({ id, nome, atualizarNome, deletarCategoria }: props) {
  const [nomeCategoria, setNomeCategoria] = useState(nome);

  const handleEditarNome = (novoNome: string) => {
    setNomeCategoria(novoNome);
    atualizarNome(id, novoNome);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/categoria/${id}`);
      deletarCategoria(id);
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
    }
  };

  return (
    <div className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2 pr-4 min-w-max">
      <span className="ml-6 mr-2 pr-3 border-r-4 border-black font-bold text-sm md:text-xl">
        {id}
      </span>

      <input
        title="Editar nome"
        type="text"
        value={nomeCategoria}
        onChange={(e) => setNomeCategoria(e.target.value)}
        onBlur={(e) => handleEditarNome(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleEditarNome(nomeCategoria);
        }}
        className="text-sm md:text-xl font-normal bg-transparent border-none focus:outline-none"
      />

      <button
        title="Excluir categoria"
        className="p-4 bg-[url('/icons/iconeX.png')] bg-no-repeat bg-center"
        onClick={handleDelete}
      ></button>
    </div>
  );
}

export default Categorias;
