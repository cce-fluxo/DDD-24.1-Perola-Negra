import React from "react";

interface TituloCategoriaProps {
  titulo: string;
}

const TituloCategoria: React.FC<TituloCategoriaProps> = ({ titulo }) => {
  return (
    <div className="w-72 py-3 px-7 text-3xl bg-neutral-100 font-semibold flex justify-end">
      {titulo}
    </div>
  );
};

export default TituloCategoria;
