import React from 'react'
import MenuCheckBox from '../MenuCheckEstoque/MenuCheckBox';
import LinhaTabelaEstoque from './LinhaTabelaEstoque';

function TabelaEstoque() {
  return (

    <table className="w-full text-2xl text-center bg-[#F2F2F2] border-collapse rounded-t-2xl overflow-y-auto">
    {/* a1n --> elemento da linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células) */}
    <thead className="sticky top-0 bg-[#BDBDBD] h-[7vh] text-base text-white z-20">
      <tr>
        <th className="font-semibold border-none bg-[#BDBDBD] rounded-tl-2xl">Produtos</th> {/* a11 */}
        <th className="font-semibold border-none bg-[#BDBDBD]">Tamanhos</th>
        <th className="font-semibold border-none bg-[#BDBDBD] w-[23vw]">Cores</th>
        <th className="font-semibold border-none bg-[#BDBDBD]">Quantidade</th>
        <th className="font-semibold bg-[#BDBDBD] rounded-tr-2xl">Opções</th> {/* a1n */}
      </tr>
    </thead>
      
    <tbody>
      <LinhaTabelaEstoque nome='Blusa' tipo='decotada v' quantidade='20'></LinhaTabelaEstoque>
      <LinhaTabelaEstoque nome='Blusa' tipo='decotada v' quantidade='20'></LinhaTabelaEstoque>
      <LinhaTabelaEstoque nome='Blusa' tipo='decotada v' quantidade='20'></LinhaTabelaEstoque>
      <LinhaTabelaEstoque nome='Blusa' tipo='decotada v' quantidade='20'></LinhaTabelaEstoque>
    </tbody>
  </table>
    );
};

export default TabelaEstoque