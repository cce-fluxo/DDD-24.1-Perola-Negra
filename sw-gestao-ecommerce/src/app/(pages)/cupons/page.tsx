import React from 'react'
import Header from '@/app/components/Header';
import TituloCategoria from '@/app/components/TituloCategoria';
import Link from 'next/link';


function Cupons() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center bg-green-600 border-solid border-2 border-blue-900'>{/*"Body" da página*/}

    <div className='flex flex-col justify-around h-[100vh] w-[80vw] border-solid border-2 border-black'>{/*conteudo da página*/}
  
      <div className='w-full h-[10vh] flex border-solid border-2 border-yellow-500'>{/*conteudo 1 da página*/}
        <TituloCategoria titulo='Cupons'></TituloCategoria>{/*Nome da página*/}
      </div>

      <div className='w-full h-[80vh] overflow-y-auto flex-col my-3 border-solid border-2 border-yellow-500'>{/*conteudo 2 da página*/}

        <div className='w-full h-[25vh] flex flex-col justify-evenly my-2 p-4 border-2 border-black rounded-xl bg-[#BDBDBD]'>{/*Card tabela*/}

          <div className='w-full flex justify-around mb-2'>{/*Nome + codigo*/}
            <div className=' rounded-xl font-extrabold text-lg'>DDDIVOS</div>{/*Nome cupom*/}
            <div className=' rounded-xl  text-white text-opacity-50'>#12345678</div>{/*Código cupom*/}
          </div>

          <div className='w-full flex justify-around mb-2'>{/*Desconto + Qtd uso*/}
            <div className=' rounded-xl font-semibold'>Desconto: 25%</div>{/*Desconto*/}
            <div className=' rounded-xl  text-black'>Usado: 234x</div>{/*Qtd usado/}
          </div>

          <div className='w-full flex justify-around'>{/*Caixa Validade*/}
            <div className=' rounded-xl font-semibold'>Válido até: 12/12/2024</div>{/*texto validade*/}
          </div>

        </div>
                
      </div>
  
      <div className='flex border-solid border-2 border-yellow-500'>{/*conteudo 3 da página*/}
  
        <ul className='w-full h-[8vh] bg-white flex justify-evenly rounded-xl border-solid border-2 border-red-800'>{/*Caixa SubHeader*/}
          
          <li className='border-solid border-2 border-blue flex items-center text-black underline'>{/*Caixa link1*/}
              <Link href={'#'}>Cupons ativos</Link>
          </li>
  
          <li className='border-solid border-2 border-blue flex items-center text-black text-opacity-50'>{/*Caixa link2*/}
              <Link href={'#'}>Adicionar cupons</Link>
          </li>
        </ul>
  
      </div>
    </div>
  </div>
  
  
  )
}

export default Cupons;