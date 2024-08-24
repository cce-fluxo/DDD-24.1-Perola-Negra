"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background

const ForgotPassword: React.FC = () => {
  const router = useRouter(); // Ir pra outra página

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login/esqueci-minha-senha-2");
  };

  return (
    // Layout do esqueci minha senha 1
    <LoginLayout>
      <div
        className="absolute w-[500px] h-[60px] left-[85px] top-[280px] text-black text-[50px] font-semibold leading-[1.2] break-words"
      >
        Esqueci<br /> minha senha
      </div>
      
      <div className="absolute flex flex-col items-start p-8 left-[55px] top-[400px] w-[calc(100%-70px)] max-w-[500px]">
        <p className="text-left mb-6 text-lg">
          Insira seu e-mail para enviarmos um código de verificação para que você possa alterar a senha
        </p>

        <div className="mb-4 w-full">
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
          className="absolute left-[200px] top-[230px] w-[150px] px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100"
        >
          Enviar
        </button>
      </div>
    </LoginLayout>
  );
};

export default ForgotPassword;


