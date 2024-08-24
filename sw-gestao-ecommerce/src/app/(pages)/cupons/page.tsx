import React from 'react'
import Header from '@/app/components/Header';
import TituloCategoria from '@/app/components/TituloCategoria';
import Link from 'next/link';


function Cupons() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]'>{/*"Body" da página*/}

    <div className='flex flex-col justify-around h-[100vh] w-[80vw] py-3'>{/*conteudo da página*/}
  
      <div className='w-full h-[10vh] flex border-solid'>{/*conteudo 1 da página*/}
        <TituloCategoria titulo='Cupons'></TituloCategoria>{/*Nome da página*/}
      </div>

      <div className='w-full h-[80vh] overflow-y-auto flex-col my-3'>{/*conteudo 2 da página*/}

        <div className='w-full h-[25vh] flex flex-col justify-evenly my-2 p-4 rounded-xl bg-[#BDBDBD]'>{/*Card-tabela para dispositivos mobile*/}

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Nome + codigo)*/}
            <div className=' rounded-xl font-extrabold text-lg'>DDDIVOS</div>{/*Nome cupom*/}
            <div className=' rounded-xl  text-white text-opacity-50'>#12345678</div>{/*Código cupom*/}
          </div>

          <div className='w-full flex justify-around mb-2'>{/*Caixa (Desconto + Qtd usado)*/}
            <div className=' rounded-xl font-semibold'>Desconto: 25%</div>{/*Desconto*/}
            <div className=' rounded-xl  text-black'>Usado: 234x</div>{/*quantidade usado*/}
          </div>

          <div className='w-full flex justify-around'>{/*Caixa validade*/}
            <div className=' rounded-xl font-semibold'>Válido até: 12/12/2024</div>{/*Texto validade*/}
          </div>

        </div>
                
      </div>
  
      <div className='flex'>{/*conteudo 3 da página*/}
  
        <ul className='w-full h-[8vh] bg-white flex justify-evenly rounded-xl'>{/*Caixa SubHeader*/}
          
          <li className='flex items-center text-black underline'>{/*Caixa link1*/}
              <Link href={'#'}>Cupons ativos</Link>
          </li>
  
          <li className='flex items-center text-black text-opacity-50'>{/*Caixa link2*/}
              <Link href={'#'}>Adicionar cupons</Link>
          </li>
        </ul>
  
      </div>
    </div>
  </div>
  
  
  )
}

export default Cupons;