import React from "react";

interface Props {
  cupons: Array<{
    nome: string;
    codigo: string;
    detalhes: string;
    validade: string;
  }>;
}

const Tabela: React.FC<Props> = ({ cupons }) => {
  return (
    <table className="w-[100vw] text-2xl text-center bg-[#F2F2F2] border-collapse">
      <thead className="sticky top-0 bg-[#BDBDBD] h-[9vh] text-xl text-white">
        <tr>
          <th className="font-light border-none bg-[#BDBDBD]">Cupom</th>
          <th className="font-light border-none bg-[#BDBDBD]">Código</th>
          <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
          <th className="font-light bg-[#BDBDBD]">Válido até</th>
        </tr>
      </thead>
      <tbody>
        {cupons.map((cupom, index) => (
          <tr key={index}>
            <td className="border-2 border-[#E0E0E0] py-5 px-14 bg-white border-l-0">{cupom.nome}</td>
            <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white">{cupom.codigo}</td>
            <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white">{cupom.detalhes}</td>
            <td className="border-2 border-[#E0E0E0] py-5 px-4 bg-white border-r-0">{cupom.validade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;

