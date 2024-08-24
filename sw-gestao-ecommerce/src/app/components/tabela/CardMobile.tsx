import React from 'react'

function CardMobile({nome = 'NomeCupom',codigo = '#123445678',desconto,qtdUsada,validade}:any) {
  return (
    <div className='w-full h-[35vh] flex flex-col justify-between my-2 p-4 rounded-xl bg-[#BDBDBD] md:w-[39vw] md:h-[25vh]'>{/*Card-tabela para dispositivos mobile*/}

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Nome + codigo)*/}
            <div className=' rounded-xl font-extrabold text-lg'>{nome}</div>{/*Nome cupom*/}
            <div className=' rounded-xl  text-white text-opacity-50'>{codigo}</div>{/*Código cupom*/}
          </div>

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Desconto + Qtd usado)*/}
            <div className=' rounded-xl font-semibold'>Desconto: {desconto}%</div>{/*Desconto*/}
            <div className=' rounded-xl  text-black'>Usado: {qtdUsada}x</div>{/*quantidade usado*/}
          </div>

          <div className='w-full flex justify-around'>{/*Caixa validade*/}
            <div className=' rounded-xl font-semibold'>Válido até: {validade}</div>{/*Texto validade*/}
          </div>

        </div>
  )
}

export default CardMobile