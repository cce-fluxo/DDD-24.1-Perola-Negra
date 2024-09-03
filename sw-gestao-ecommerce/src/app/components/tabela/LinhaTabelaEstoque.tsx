import React from 'react'
import MenuCheckBox from '../MenuCheckEstoque/MenuCheckBox'
import OpcoesTabelaEstoque from './OpcoesTabelaEstoque';

interface props{
    nome: string;
    tipo: string;
    quantidade: string;


}

function LinhaTabelaEstoque({nome, tipo, quantidade}: props) {
  return (
    <><tr> {/*Inicio Linha*/}
    <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
      <div className='h-[12vh] flex justify-center gap-2'>
        <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
          
        </div>
        <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
          {nome}<br></br>{tipo}
        </div>
      </div>
      
    </td> {/* b11 */}
    <td className="bg-[#F2F2F2]">
      <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
    </td>
    <td className="py-5 bg-[#F2F2F2]">
      <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
    </td>
    <td className="py-5 px-4 bg-[#F2F2F2]">{quantidade}</td>
    <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

      <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
           <OpcoesTabelaEstoque isTabela></OpcoesTabelaEstoque>
      </div>
    </td> {/* b1n */}
  </tr> {/* Fim Linha*/}</>
  )
}

export default LinhaTabelaEstoque