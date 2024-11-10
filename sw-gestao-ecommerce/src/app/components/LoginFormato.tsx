"use client";

import React from "react";
import Image from "next/image";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex justify-around pl-6 gap-32 items-center h-screen bg-white">
      <div className="flex flex-col w-[35%] h-[85%] bg-[#F0F0F0] rounded-[20px] -ml-40 mb-20">
        <div className="flex flex-col w-[470px] h-[35%] text-black text-[54px] font-semibold break-words pl-14 ml-4">
          <h1 className="text-[90%] mt-24">LOGO</h1>
          <h1 className="text-[90%]">RESTAURANTE</h1>
        </div>
        {children}
      </div>


      <div className="flex w-[37%] h-full bg-[#D9D9D9]"></div>

      <div className="flex items-center -ml-[88%] mt-[14.5%]">
        <Image
          src="/images/mobilegame.png"
          alt="Mobile Game"
          width={750}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default LoginLayout;
