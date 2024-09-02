import React from "react";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import FotoBanner from "@/app/components/FotoBanner";

function Banner() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex flex-col justify-between  ">{/**Body*/}

        <div className="">
          {/**Header + pesquisar*/}
          <div className="flex flex-col w-[85vw] lg:hidden">
            {/**Header Conteudo Mobile*/}
            <HeaderMobile titulo="Banner"></HeaderMobile>
          </div>

          <div className="hidden lg:flex w-full h-[16vh]">
            {/**Header para dispositivos lg*/}
            <Header></Header>
          </div>
        </div>

        <div className="w-[90vw] h-[70vh] mx-auto rounded-2xl mb-6 flex flex-col justify-around p-6 bg-[#F0F0F0]">{/**Caixa Conteudo Principal*/}
            <div className="flex gap-6 h-[70%] overflow-x-auto flex-shrink-0">{/**Carrossel Fotos*/}
                <FotoBanner></FotoBanner>
                <FotoBanner></FotoBanner>  
                <FotoBanner></FotoBanner>  
                <FotoBanner></FotoBanner>    
            </div>
            <div className="h-[10%] flex items-center bg-[url('/icons/iconeUpload.png')] bg-no-repeat bg-left font-semibold">{/**Espaço Upload*/}
                <span className="ml-14">Faça Upload do arquivo ou arraste-o até aqui</span>
            </div>
            <div className="flex justify-end items-center h-[10%]">{/**Botao Atualizar*/}
                <button className="py-2 px-3 text-xl font-bold rounded-lg text-[#4F4F4F] bg-[#D9D9D9]">Atualizar</button>
            </div>
        </div>
    </div>
  );
}

export default Banner;
