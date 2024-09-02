"use client";

import React from "react";

interface PopupConfirmProps { // Lógica que diz que sozinho o popup não faz nada precisa ajeitar isso em cada página
  onClose: () => void;
  onConfirm: () => void;
}
// Layout normalmente
const PopupConfirm: React.FC<PopupConfirmProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg p-6 w-[950px] h-[450px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-black text-4xl font-bold"
        >
          X
        </button>
        <div className="absolute bottom-14 left-0 right-0 flex justify-center items-center space-x-8">
          <button
            onClick={onClose}
            className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-xl w-full max-w-[250px]"
          >
            NÃO
          </button>
          <button
            onClick={onConfirm}
            className="py-4 px-12 bg-black text-white text-3xl font-bold border-4 border-white rounded-xl w-full max-w-[250px]"
          >
            SIM
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirm;
