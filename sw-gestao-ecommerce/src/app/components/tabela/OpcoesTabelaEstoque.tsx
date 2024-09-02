import React from 'react'

interface props{
    isTabela?: boolean;
}
function OpcoesTabelaEstoque({isTabela = false}: props) {
  return (
    <>
    <button className={`bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}></button>
    <button className={`bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}></button>
    <button className={`bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}></button>    </>
  )
}

export default OpcoesTabelaEstoque