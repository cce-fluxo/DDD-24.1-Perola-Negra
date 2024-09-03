"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background

const ResetPassword: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/home"); // Ir para outra página
  };

  return (
    // Layout de confirmar nova senha
    <LoginLayout>
      <div
        className="absolute w-[500px] h-[60px] left-[85px] top-[280px] text-black text-[48px] font-semibold leading-[1.2] break-words"
      >
        Esqueci<br /> minha senha
      </div>

      <div className="absolute left-[55px] top-[370px] w-[calc(100%-70px)] max-w-[500px] flex flex-col items-start p-8">
        <div className="mb-4 w-full">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="new-password"
          >
            Nova Senha
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Digite sua nova senha"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="confirm-password"
          >
            Confirmar Nova Senha
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Confirme sua nova senha"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="absolute left-[200px] top-[260px] w-[150px] px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100"
        >
          Enviar
        </button>
      </div>
    </LoginLayout>
  );
};

export default ResetPassword;

