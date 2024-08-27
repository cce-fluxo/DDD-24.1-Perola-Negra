import React from 'react'

function BotaoSalvar({nome = 'Botao'}: any) {
  return (

    <button className="py-1 px-6 bg-neutral-500 text-white rounded-xl">
        {nome}
  </button>
  )
}

export default BotaoSalvar