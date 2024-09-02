"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PopupConfirm from "@/app/components/PopupConfirm";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleConfirmLogout = () => {
    setShowPopup(false);
    router.push("/pagina-destino");  // Redireciona o usuário após a confirmação
  };

  return (
    <section className="relative h-screen">
      <div
        className="absolute w-[670px] h-full left-[1250px] top-0 bg-[#D9D9D9] z-[-1]"
      />

      <div
        className="absolute left-[calc(100%-1105px)] bottom-0 w-full max-w-[750px] z-[1] flex justify-center"
      >
        <img 
          src="/images/mobilegame.png" 
          alt="Imagem do Jogo Móvel" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div
        className="absolute w-[650px] h-[747px] left-[75px] right-[796px] top-[22px] bottom-[146px] bg-white rounded-[20px] p-5 box-border"
      >
        <div className="align-baseline font-bold text-5xl mb-[140px]">
          LOGO RESTAURANTE
        </div>

        <div className="flex flex-col space-y-24">
          <Link href="/banner" className="text-5xl hover:underline font-bold">
            Banner
          </Link>
          <Link href="/produtos" className="text-5xl hover:underline font-bold">
            Produtos
          </Link>
          <Link href="/fluxo-de-pedidos" className="text-5xl hover:underline font-bold">
            Fluxo de Pedidos
          </Link>
          <Link href="/controle-de-estoques" className="text-5xl hover:underline font-bold">
            Controle de Estoques
          </Link>
        </div>

        {children}
      </div>

      <div className="absolute bottom-0 left-[80px] p-2.5">
        <a className="text-3xl cursor-pointer" onClick={handleLogoutClick}>
          Sair
        </a>
      </div>

      {showPopup && ( // Lógica pra fazer alguma coisa Carol please ajeita isso aqui
        <PopupConfirm
          onClose={() => setShowPopup(false)}
          onConfirm={handleConfirmLogout}
        />
      )}
    </section>
  );
};

export default LoginLayout;

