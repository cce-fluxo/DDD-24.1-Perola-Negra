"use client";

import React from "react";
import Image from "next/image";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute w-[670px] h-full left-[1250px] top-0 bg-[#D9D9D9] z-[-1]"
      />

      <div
        className="absolute left-[calc(100%-1105px)] bottom-0 w-full max-w-[750px] z-[1] flex justify-center"
      >
        <Image 
          src="/images/mobilegame.png" 
          alt="Imagem do Jogo Móvel" 
          width={750}
          height={500}
          className="w-full h-auto object-contain" 
        />
      </div>

      <div
        className="absolute w-[650px] h-[747px] left-[75px] top-[22px] bg-[#F0F0F0] rounded-[20px]"
      >
        <div
          className="absolute w-[450px] h-[150px] left-[85px] top-[120px] text-black text-[48px] font-semibold break-words"
        >
          LOGO RESTAURANTE
        </div>

        {children}
      </div>
    </section>
  );
};

export default LoginLayout;
