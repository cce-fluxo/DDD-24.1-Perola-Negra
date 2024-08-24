import React from 'react'
import Header from '@/app/components/Header';
import TituloCategoria from '@/app/components/TituloCategoria';
import CardMobile from '@/app/components/tabela/CardMobile';
import NavegacaoCupons from '@/app/components/tabela/NavegacaoCupons';


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
       <NavegacaoCupons activeLink={1}></NavegacaoCupons>
  
      </div>
    </div>
  </div>
  
  
  )
}

export default Cupons;