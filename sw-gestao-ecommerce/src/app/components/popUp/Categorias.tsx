import React, { useState } from "react";

interface props {
  numero: number;
  nome: string;
  editarNome: (novoNome: string) => void;
}

function Categorias({ numero, nome, editarNome }: props) {
  const [editando, setEditando] = useState(false);
  const [nomeTemporario, setNomeTemporario] = useState(nome);

  // Salva o novo nome e desativa o modo de edição
  const salvarNome = () => {
    editarNome(nomeTemporario);
    setEditando(false);
  };

  return (
    <div className="flex justify-start items-center bg-[#D9D9D9] rounded-md p-2">
      <span className="ml-6 mr-2 pr-2 border-r-4 border-black font-bold text-sm md:text-xl">
        {numero}
      </span>

      {editando ? (
        <input
          title="Editar nome"
          type="text"
          value={nomeTemporario}
          onChange={(e) => setNomeTemporario(e.target.value)}
          onBlur={salvarNome}
          onKeyDown={(e) => {
            if (e.key === "Enter") salvarNome();
          }}
          className="text-sm md:text-xl font-normal bg-transparent border-none focus:outline-none"
        />
      ) : (
        <span
          onDoubleClick={() => setEditando(true)}
          className="text-sm md:text-xl font-normal cursor-pointer"
        >
          {nome}
        </span>
      )}
    </div>
  );
}

export default Categorias;
