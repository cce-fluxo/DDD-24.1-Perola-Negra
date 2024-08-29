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
function CardMobile({nome = 'Nome',codigo = '#123445678',desconto,qtdUsada,validade}: props) {
  return (

    <div className="w-full h-[20vh] flex justify-around p-4 rounded-xl bg-[#BDBDBD]" >{/*Card-tabela para dispositivos mobile*/}

        <div className='bg-red-800 w-[25vw] text-center' >{/**Foto do produto */}
            Foto
        </div>

        <div className='border-2 border-white w-[40vw] flex flex-col  justify-around'>{/**Informacoes*/}
            <div className='border-2 border-black font-bold text-center'>Blusa decotada v</div>{/**Nome*/}

            <div className='border-2 border-yellow-800 flex justify-around font-medium'>{/**Tamanho+cor */}
                <div>Amarela</div>
                <div className='text-white'>M</div>
            </div>

            <div className='border-2 border-green-800 flex justify-around font-medium'>{/**Quantidade + opcoes */}
                <div>20x</div>
                <div className=''>Icones</div>
            </div>

        </div>           
    </div>
  );
};

export default CardMobile;