"use client";

import React from "react";
import Image from "next/image";
import api from "@/services/axios";
import { useRouter } from "next/navigation";

interface PopupConfirmProps {
  // Lógica que diz que sozinho o popup não faz nada precisa ajeitar isso em cada página
  onClose: () => void;
  onConfirm: () => void;
  idProduto: number;
}

async function deletarProduto (idProduto: number) {
  try {
    const response = await api.delete(`/produto/${idProduto}`);
    console.log('Resposta:', response.data);

  } catch (error:any) {
    console.log("deu errado :/ ", error.response.data);
  }
}

// Layout normalmente
const PopupConfirm: React.FC<PopupConfirmProps> = ({ onClose, onConfirm, idProduto }) => {
  const router = useRouter();
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
          <h1 className="text-4xl font-bold text-black">Excluir Produto</h1>
          <p className="text-2xl text-black">
            Tem certeza que deseja excluir esse produto ?
          </p>
          <div className="w-full content-end flex justify-center items-center space-x-20">
            <button
              onClick={onClose}
              className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-full w-full max-w-[250px]"
            >
              NÃO
            </button>
            <button
              onClick={async () => {
                onConfirm;
                await deletarProduto(idProduto);
                router.push("/produtos/Blusas")}} //Podemos mudar essa rota depois (colocar ela pra ir pra rota anterior e nao para Blusas)
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