import React from "react";
import MenuMobile from "./MenuMobile";

interface props {
    titulo: string;
}

{/**Titulo + Navegacao */}

{/**Para usar a Header em dispositivos Mobile e md, basta pegar esse componente: <HeaderMobile titulo='tituloDaPagina'</HeaderMobile>
  Os componentes "LinkMenu" e "MenuMobile" são auxiliares para melhorar a manutenção do código*/}

function HeaderMobile({titulo}: props) {
  return (
    <div className="w-full h-[8vh] flex justify-between items-center lg:hidden"> {/**Perceba que essa header some em dispositivos lg*/}
    <div className="w-[18vw] h-full">
        <MenuMobile></MenuMobile>
      </div>
      <div className="ml-[8vw] font-semibold text-4xl sm:text-5xl md:text-6xl">{/*Nome da pagina*/}
        {titulo}
    </div>
    </div>
  );
}

export default HeaderMobile;
