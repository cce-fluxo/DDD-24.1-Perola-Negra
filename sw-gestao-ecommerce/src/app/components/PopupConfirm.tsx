"use client";

import React from "react";
import Image from "next/image";
interface PopupConfirmProps {
  // Lógica que diz que sozinho o popup não faz nada precisa ajeitar isso em cada página
  onClose: () => void;
  onConfirm: () => void;
}
// Layout normalmente
const PopupConfirm: React.FC<PopupConfirmProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-3xl p-16 w-[950px] h-[450px]">
        <Image
          className="absolute top-14 right-14 text-black text-4xl font-bold cursor-pointer"
          draggable={false}
          onClick={onClose}
          src={"/icons/x-cancel.png"}
          alt=""
          width={25}
          height={25}
        ></Image>
        <div className="flex flex-col items-center justify-between space-y-4 h-full content-between">
          <h1 className="text-4xl font-bold text-black">Sair da conta</h1>
          <p className="text-2xl text-black">
            Tem certeza que deseja sair da conta ?
          </p>
          <div className="w-full content-end flex justify-center items-center space-x-20">
            <button
              onClick={onClose}
              className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-full w-full max-w-[250px]"
            >
              NÃO
            </button>
            <button
              onClick={onConfirm}
              className="py-4 px-12 bg-black text-white text-3xl font-bold border-4 border-white rounded-full w-full max-w-[250px]"
            >
              SIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirm;
