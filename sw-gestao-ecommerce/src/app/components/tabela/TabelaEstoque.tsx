import React from 'react'

function TabelaEstoque() {
  return (

    <table className="w-[100vw] text-2xl text-center bg-[#F2F2F2] border-collapse">
    {/* a1n --> elemento da linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células) */}
    <thead className="sticky top-0 bg-[#BDBDBD] h-[9vh] text-xl text-white">

      <tr>
        <th className="font-light border-none bg-[#BDBDBD]">Cupom</th> {/* a11 */}
        <th className="font-light border-none bg-[#BDBDBD]">Código</th>
        <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
        <th className="font-light border-none bg-[#BDBDBD]">Qt. de usos</th>
        <th className="font-light bg-[#BDBDBD]">Válido até</th> {/* a1n */}
      </tr>
    </thead>
      
    <tbody>

          <tr> {/* Linhas do meio da tabela */}
            <td className="py-5 px-14 border-2 border-[#E0E0E0] border-t-0 bg-white border-l-0">DDDIVOS</td> {/* b11 */}
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">#123456789</td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">25% de<br />desconto</td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">563</td>
            <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 border-r-0 bg-white">23/05/2023</td> {/* b1n */}
          </tr>

        <tr> {/* Tem que ser a ultima linha da tabela */}
        <td className="border-2 px-14 border-[#E0E0E0] border-b-0 border-l-0 bg-white">Insira o nome do cupom</td> {/* bn1 */}
        <td className= "border-2 px-4 border-[#E0E0E0] border-b-0 bg-white"> Digite o código</td>
        <td className="border-2 px-4 border-[#E0E0E0] border-b-0 bg-white"> Insira detalhes do cupom</td>
        <td className="border-2 px-4 border-[#E0E0E0] border-b-0 border-r-0 bg-white">Defina a validade</td> {/* bnn */}
      </tr>

    </tbody>
  </table>
    );
};

export default TabelaEstoque