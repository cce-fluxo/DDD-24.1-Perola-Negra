"use client";

import React, { useState, useEffect } from "react";
import MenuMobile from "./HeaderMobile/MenuMobile";
import HeaderLarge from "./HeaderLarge";

interface Props {
  titulo?: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar se a tela é estreita
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Definindo como "estreita" telas menores que 1024px
    };

    // Adiciona o event listener na primeira renderização e remove ao desmontar
    window.addEventListener("resize", handleResize);
    handleResize(); // Checa na primeira renderização

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/**Header Desktop - Exibido somente em telas largas */}
      {!isMobile && (
        <div className="hidden lg:block">
          <HeaderLarge titulo={titulo} />
        </div>
      )}

      {/**Header Mobile, exibido somente se a tela for estreita */}
      {isMobile && (
        <div className="w-full h-[8vh] flex justify-between items-center lg:hidden">
          {/**Perceba que essa header some em dispositivos lg*/}
          <div className="ml-[8vw] font-semibold text-4xl sm:text-6xl">
            {titulo}
          </div>
          <div className="w-[18vw] h-full">
            <MenuMobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
