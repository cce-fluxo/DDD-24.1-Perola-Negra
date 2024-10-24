"use client";

import React from "react";
import Image from "next/image";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex justify-around pl-6 gap-12 items-center h-screen bg-red-100">
      <div className="flex flex-col w-[40%] h-[90%] left-[75px] top-[22px] mr-[20%] bg-[#F0F0F0] rounded-[20px]">
        <div className="bg-pink-500 w-[450px] h-[20%] text-black text-[48px] font-semibold break-words">
          <h1 className="text-[80%]">LOGO</h1>
          <h1 className="text-[80%]">RESTAURANTE</h1>
        </div>
        {children}
      </div>
      <div className="flex flex-1 w-[45%] h-full bg-red-950"></div>
    </section>
  );
};

export default LoginLayout;
