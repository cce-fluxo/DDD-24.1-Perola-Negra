import MenuMobile from './HeaderMobile/MenuMobile'
import MenuEscolherLoja from './MenuEscolherLoja'
import React from 'react'

function AreaPesquisar() {
  return (
    <div className="flex justify-around items-center w-full h-[8vh] border-2 border-black lg:justify-start lg:gap-10 lg:mt-6">
            {/**Area de pesquisa*/}
            <form className="w-[70%] h-full flex bg-[#E0E0E0] p-2 rounded-xl border-2 border-black lg:w-[45%]">
              {/**Barra de pesquisa*/}
              <button className="w-[8vw] bg-[url('/images/lupinha.png')] bg-no-repeat bg-center bg-contain md:w-[6vw] lg:w-[5vw] xl:w-[4vw] "></button>
              {/**Lupinha*/}
              <input
                className="w-[35vw] text-left bg-[#E0E0E0] ml-2"
                placeholder="Buscar"
              ></input>
              {/**Espaço para digitar o texto*/}
            </form>
            <div className="w-[20%] h-full bg-contain bg-no-repeat bg-left lg:rounded-xl lg:bg-[#D9D9D9]">

              <div className="w-full h-full lg:hidden">
                <MenuMobile isMenuLoja></MenuMobile>{/**Menu Mobile*/}
              </div>
              <MenuEscolherLoja></MenuEscolherLoja>
            </div>
          </div>
  )
}

export default AreaPesquisar