import React from 'react'
import MenuCheckBox from '../MenuCheckBox';

function TabelaEstoque() {
  return (

    <table className="w-full text-2xl text-center bg-[#F2F2F2] border-collapse rounded-t-2xl">
    {/* a1n --> elemento da linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células) */}
    <thead className="sticky top-0 bg-[#BDBDBD] h-[9vh] text-xl text-white ">
      <tr>
        <th className="text-left indent-16 font-semibold border-none bg-[#BDBDBD] rounded-tl-2xl">Produtos</th> {/* a11 */}
        <th className="font-semibold border-none bg-[#BDBDBD] w-[23vw]">Tamanhos</th>
        <th className="font-semibold border-none bg-[#BDBDBD]">Cores</th>
        <th className="font-semibold border-none bg-[#BDBDBD]">Quantidade</th>
        <th className="font-semibold bg-[#BDBDBD] rounded-tr-2xl">Opções</th> {/* a1n */}
      </tr>
    </thead>
      
    <tbody>

          <tr> {/* Linhas do meio da tabela */}
            <td className="py-5 px-14 border-2 border-[#E0E0E0] border-t-0 bg-white border-l-0">
              <div className='flex border-2 border-black w-[23vw] h-[13vh] gap-2'>
                <div className= 'border-2 border-red-700 text-center rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  Foto
                </div>
                <div className='border-2 border-black text-left font-medium'>
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white justify-center">
              <div className='bg-blue-600 w-[7vw] h-[10vh] mx-auto'><MenuCheckBox></MenuCheckBox></div>
            </td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">25% de<br />desconto</td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">563</td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 border-r-0 bg-white">23/05/2023</td> {/* b1n */}
          </tr>

        <tr> {/* Tem que ser a ultima linha da tabela */}
        <td className="border-2 px-14 border-[#E0E0E0] border-b-0 border-l-0 bg-white">Insira o nome do cupom</td> {/* bn1 */}
        <td className= "border-2 px-4 border-[#E0E0E0] border-b-0 bg-white"> Digite o código</td>
        <td className="border-2 px-4 border-[#E0E0E0] border-b-0 bg-white"> Insira detalhes do cupom</td>
        <td className="border-2 px-4 border-[#E0E0E0] border-b-0 border-r-0 bg-white">Defina a validade</td>
        <td className="border-2 px-4 border-[#E0E0E0] border-b-0 border-r-0 bg-white">Defina a validade</td> {/* bnn */}
      </tr>

    </tbody>
  </table>
    );
};

export default TabelaEstoque