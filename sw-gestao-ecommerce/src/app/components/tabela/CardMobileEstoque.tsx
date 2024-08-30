"use client"
import React, { useState } from 'react'
import Image from 'next/image';

interface props{
  foto?:string;
  nome?:string;
  qtdEstoque?:string;
  tamanho?:string;
  cor?:string;

}
function CardMobile({foto = 'Foto', nome = 'nome produto', qtdEstoque = '_', tamanho = 'XX', cor = 'Cor'}: props) {
  return (

    <div className="w-full h-[20vh] flex justify-around my-2 p-4 rounded-xl bg-[#F2F2F2]" >{/*Card-tabela para dispositivos mobile*/}

        <div className= 'bg-white w-[25vw] text-center rounded-lg' >{/**Foto do produto */}
            {foto}
        </div>

        <div className='w-[40vw] flex flex-col justify-around rounded-xl'>{/**Informacoes*/}

            <div className='font-bold text-center'>{nome}</div>{/**Nome*/}

            <div className='flex justify-around font-medium'>{/**Tamanho+cor */}
                <div>{cor}</div>
                <div className='font-extrabold'>{tamanho}</div>
            </div>

            <div className='flex justify-around font-medium'>{/**Quantidade + opcoes */}
                <div className='font-semibold text-lg w-[2vw]'>{qtdEstoque}x</div>
                <div className='w-[14vw] flex justify-between sm:w-[10vw] md:w-[8vw]'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[5vw]"></button>|
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[5vw]"></button>|
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[5vw]"></button>
                </div>
            </div>

        </div>           
    </div>
  );
};

export default CardMobile;