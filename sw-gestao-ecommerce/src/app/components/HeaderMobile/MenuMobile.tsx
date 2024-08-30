"use client";

import React, { useState } from "react";
import Link from "next/link";
import LinkMenu from "./LinkMenu";

interface props {
  isMenuLoja?: boolean; //Verifica se o botao deve se comportar do menu Sandwiche ou o do menu Loja, ja que ambos tem as mesmas funcionalidades, apenas mudando os icones e links
}

function MenuMobile({ isMenuLoja = false}:props) {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className="h-full w-full">
      <button
        onClick={toggleMenu}
        className={`w-full h-full bg-no-repeat bg-contain bg-center ${
          isOpen
            ? isMenuLoja
              ? 'bg-[url("/images/iconeLojaOnClick.png")]'
              : 'bg-[url("/images/iconeMenuMobileOnClick.png")]'
            : isMenuLoja
            ? 'bg-[url("/images/iconeLoja.png")]'
            : 'bg-[url("/images/iconeMenuMobile.png")]'
        }`}
      >
        {/** Botão do Menu */}
      </button>

        {!isMenuLoja && (<>
            <div className={`flex w-[27vw] ${isOpen ? "" : "hidden"}`}>
                {/**Menu*/}
                <ul className="w-full flex flex-col justify-around items-center bg-white rounded-b-xl z-10">
                <LinkMenu pagina="/home" nomeLink="Home"></LinkMenu>
                <LinkMenu pagina="/banner" nomeLink="Banner"></LinkMenu>
                <LinkMenu pagina="/produtos" nomeLink="Produtos"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Pedidos"></LinkMenu>
                <LinkMenu pagina="/controle-estoque" nomeLink="Estoque"></LinkMenu>
                <LinkMenu pagina="/cupons" nomeLink="Cupons" isUltimo></LinkMenu>
                </ul>
            </div>
      </>)}

      {isMenuLoja && (<>
            <div className={`flex w-[27vw] ${isOpen ? "max-h-[55vh] overflow-y-auto" : "hidden"}`}>
                {/**Menu*/}
                <ul className="w-full flex flex-col justify-around items-center bg-white rounded-b-xl z-10">
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi"></LinkMenu>
                <LinkMenu pagina="#" nomeLink="Shopping Guatemi" isUltimo></LinkMenu>
                </ul>
            </div>
      </>)}
    </div>
  );
}

export default MenuMobile;
