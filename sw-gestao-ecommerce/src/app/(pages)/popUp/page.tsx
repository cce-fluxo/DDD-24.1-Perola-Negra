import Categorias from '@/app/components/Categorias'
import React from 'react'

function popUpCategoria() {
  return (
    <div className='w-[100vw] h-[100vh] bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[60vh] lg:w-[60vw] lg:h-[55vh] flex flex-col justify-between p-6 rounded-xl bg-[#F5F5F5]'>{/*Caixa de conteudos*/}
          <div className='h-[15%] flex justify-end items-center'>{/**Titulo*/}
              <span className='mx-auto font-bold text-xl md:text-3xl'>Categorias</span>
              <button className='p-5 bg-[url("/icons/iconeX.png")] bg-no-repeat bg-center'></button>
          </div>
          <div className='h-[65%] grid grid-cols-2 grid-rows-3 grid-flow-col gap-2 mt-3'>{/**Espaço categorias*/}
           <Categorias numero='1'></Categorias>
           <Categorias numero='2'></Categorias>
           <Categorias numero='3'></Categorias>
           <Categorias numero='4'></Categorias>
            <button className='flex justify-start items-center bg-[#D9D9D9] indent-6'>{/**Categoria1 */}
              + Adicionar categoria
            </button>
            
          </div>
          <div className='flex justify-center h-[15%] items-center'>
            <button className='py-1 px-7 rounded-3xl bg-black text-white mt-4'>Salvar</button>
          </div>
        </div>
    </div>
  )
}

export default popUpCategoria