"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginFormato from "@/app/components/LoginFormato";

const ResetPassword: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/home");
  };

  return (
    <LoginFormato>
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        <div className="text-black text-[48px] leading-[1.2] font-semibold break-words mb-3 mr-52">
          Esqueci<br /> minha senha
        </div>

        <div className="w-full max-w-md md:max-w-lg flex flex-col px-4">
          <div className="mb-2 w-full">
            <label
              className="flex text-sm font-semibold text-gray-700 mb-2"
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
          <div className="mb-2 w-full">
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

          <div className="flex justify-center mt-4"> {/* Adicionada a div com flex para centralizar o botão */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-[150px] px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </LoginFormato>
  );
};

export default ResetPassword;
