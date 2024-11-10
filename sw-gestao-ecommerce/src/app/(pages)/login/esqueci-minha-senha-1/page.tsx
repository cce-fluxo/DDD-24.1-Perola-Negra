"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginFormato from "@/app/components/LoginFormato"; // Importando o componente do background

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  // handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault();
    //router.push("/login/esqueci-minha-senha-2");
  //};

  return (
    <LoginFormato>
      <div className="flex flex-col items-center h-screen space-y-8">
        <div className="w-[500px] text-black text-[50px] font-semibold leading-[1.2] break-words mt-10">

          Esqueci<br /> minha senha
        </div>

        <div className="flex flex-col items-center w-[85%] max-w-[500px] space-y-6 mt-10">

          <p className="text-left text-lg">
            Insira seu e-mail para enviarmos um código de verificação para que você possa alterar a senha.
          </p>

          <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Digite seu email"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[150px] px-4 py-4 text-lg font-bold text-center bg-black rounded-3xl text-neutral-100"
          >
            Enviar
          </button>
        </div>
      </div>
    </LoginFormato>
  );
};

export default ForgotPassword;



