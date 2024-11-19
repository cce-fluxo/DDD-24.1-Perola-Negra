"use client";
import React, { use, useEffect, useState } from "react";
import { useFormik } from "formik";
import api from "@/services/axios";

interface props {
  id: number;
  nome: string;
  editarNome: (novoNome: string) => void;
}

function Categorias({ id, nome, editarNome }: props) {
  const [categorias, setCategorias] = useState([]);

  const formik = useFormik({
    initialValues: { nome: nome },
    enableReinitialize: true,
    onSubmit: (values) => editarNome(values.nome),
  });

  useEffect(() => {
    const deleteCategoria = async () => {
      try {
        await api.delete(`/categoria/${id}`);
        const categoriasAtualizadas = categorias.filter((cat) => cat.id !== id);
        setCategorias(categoriasAtualizadas);
      } catch (error) {
        console.error("Erro ao excluir categoria:", error);
      }
    };
    deleteCategoria();
  });

  return (
    <div className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2 pr-4 min-w-max">
      <span className="ml-6 mr-2 pr-3 border-r-4 border-black font-bold text-sm md:text-xl">
        {id}
      </span>

      <form onSubmit={formik.handleSubmit}>
        <input
          title="Editar nome"
          type="text"
          value={formik.values.nome}
          onChange={formik.handleChange}
          name="nome"
          onBlur={formik.handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") formik.handleSubmit();
          }}
          className="text-sm md:text-xl font-normal bg-transparent border-none focus:outline-none"
        />
      </form>
      <div>
        <button
          title="Excluir categoria"
          className="p-4 bg-[url('/icons/iconeX.png')] bg-no-repeat bg-center"
          onClick={setCategorias}
        ></button>
      </div>
    </div>
  );
}

export default Categorias;
