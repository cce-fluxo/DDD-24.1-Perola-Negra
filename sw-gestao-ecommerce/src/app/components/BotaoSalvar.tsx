import React from 'react'

function BotaoSalvar({nome = 'Botao'}: any) {
  return (

    <button className="py-1 px-6 bg-neutral-500 text-white rounded-xl hover:bg-white hover:text-[#B0B0B0]">
        {nome}
  </button>
  )
}

export default BotaoSalvar