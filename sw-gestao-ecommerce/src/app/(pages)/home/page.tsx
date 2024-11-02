"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PopupConfirm from "@/app/components/PopupConfirm";
import Image from "next/image";

const LoginFormato: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleConfirmLogout = () => {
    setShowPopup(false);
    router.push("/login");
  };

  return (
    <section className="flex justify-around pl-6 gap-72 items-center h-screen bg-white">
      <div className="flex flex-col w-[35%] h-[85%] rounded-[20px] mb-20 ml-4">
        <div className="flex flex-col w-[470px] h-[35%] text-black text-[54px] font-semibold">
          <h1 className="flex items-center text-[90%] mt-12">
            <span className="mr-2">LOGO</span>
            <span>RESTAURANTE</span>
          </h1>
        </div>
        <div className="flex flex-col space-y-24">
          <Link href="/banner" className="text-5xl hover:underline font-bold">
            Banner
          </Link>
          <Link href="/produtos" className="text-5xl hover:underline font-bold">
            Produtos
          </Link>
          <Link
            href="/fluxo-pedidos"
            className="text-5xl hover:underline font-bold"
          >
            Fluxo de Pedidos
          </Link>
          <Link
            href="/controle-estoque"
            className="text-5xl hover:underline font-bold"
          >
            Controle de Estoques
          </Link>
        </div>
        {children}
      </div>

      <div className="flex w-[45%] h-full bg-[#D9D9D9]"></div>

      <div className="flex items-center -ml-[94%] mt-[14.5%]">
        <Image
          src="/images/mobilegame.png"
          alt="Mobile Game"
          width={750}
          height={600}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-[80px] p-2.5">
        <a className="text-3xl cursor-pointer" onClick={handleLogoutClick}>
          Sair
        </a>
      </div>

      {showPopup && (
        <PopupConfirm
          onClose={() => setShowPopup(false)}
          onConfirm={handleConfirmLogout}
        />
      )}
    </section>
  );
};

export default LoginFormato;
