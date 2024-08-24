import React from 'react'
import Header from '@/app/components/Header';
import TituloCategoria from '@/app/components/TituloCategoria';
import Link from 'next/link';
import CardMobile from '@/app/components/tabela/CardMobile';


function Cupons() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]'>{/*"Body" da página*/}

    <div className='flex flex-col justify-around h-[100vh] w-[80vw] py-3'>{/*conteudo da página*/}
  
      <div className='w-full h-[10vh] flex border-solid'>{/*conteudo 1 da página*/}
        <TituloCategoria titulo='Cupons Ativos'></TituloCategoria>{/*Nome da página*/}
      </div>

      <div className='w-full h-[80vh] overflow-y-auto flex-col my-3'>{/*conteudo 2 da página*/}

        <CardMobile nome = 'CUPOM10' validade = '12/03/2024' desconto = '25' qtdUsada = '29' codigo = '#123123'></CardMobile>
        <CardMobile></CardMobile>
        <CardMobile></CardMobile>
        <CardMobile></CardMobile>
                
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