"use client"
import React, { useState } from 'react'

interface props{
  nome?:string;
  codigo?:string;
  desconto?:string;
  qtdUsada?:string;
  validade?:string;
  isAdicionar?: boolean;

}
function CardMobile({nome = 'Nome',codigo = '#123445678',desconto,qtdUsada,validade, isAdicionar = false}: props) {
{/**isAdicionar verificar se esse card é um card para o cliente adicionar os cupons e nao apenas um card para ser mostrado ao cliente*/}
  return (

    <div className={`w-full h-[20vh] flex flex-col justify-between my-2 p-4 rounded-xl bg-[#BDBDBD] ${isAdicionar ? 'md:w-full md:h-full md:text-2xl' : 'md:w-[38vw] md:h-[24vh] '} `}>{/*Card-tabela para dispositivos mobile*/}

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Nome + codigo)*/}
            <div className=' rounded-xl font-extrabold'>{nome}</div>{/*Nome cupom*/}
            <div className=' rounded-xl  text-white text-opacity-50'>{codigo}</div>{/*Código cupom*/}
          </div>

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Desconto + Qtd usado)*/}
            <div className=' rounded-xl font-semibold'>Desconto: {desconto}%</div>{/*Desconto*/}
            {!isAdicionar && (<>
            <div className=' rounded-xl  text-black'>Usado: {qtdUsada}x</div>{/*quantidade usado*/}
            </>)}
          </div>

          <div className='w-full flex justify-around'>{/*Caixa validade*/}
            <div className=' rounded-xl font-semibold'>Válido até: {validade}</div>{/*Texto validade*/}
          </div>

        </div>
  )
}

export default CardMobile