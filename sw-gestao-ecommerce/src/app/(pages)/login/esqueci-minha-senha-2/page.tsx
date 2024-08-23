"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background

const VerifyCode: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/login/esqueci-minha-senha-3'); // Ir para outra página
  };

  return (
    // Layout do esqueci minha senha 2
    <LoginLayout>
      <div
        className="absolute"
        style={{
          width: '500px',
          height: '60px',
          left: '85px',
          top: '280px',
          color: 'black',
          fontSize: '48px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          lineHeight: "1.2",
          wordWrap: 'break-word',
        }}
      >
        Esqueci<br /> minha senha
      </div>
      
      <div className="absolute flex flex-col items-start p-8"
        style={{
          left: '55px',
          top: '370px',
          width: 'calc(100% - 70px)',
          maxWidth: '500px',
        }}
      >
        <p className="text-left mb-6 text-lg">
          Insira o código que foi enviado para o seu e-mail para que você possa alterar a senha
        </p>

        <div className="flex space-x-4">
          <input
            type="text"
            maxLength={1}
            className="w-20 h-20 text-center text-4xl font-bold border border-gray-300 rounded-lg"
            placeholder="0"
            style={{ fontSize: '4rem' }}
          />
          <input
            type="text"
            maxLength={1}
            className="w-20 h-20 text-center text-4xl font-bold border border-gray-300 rounded-lg"
            placeholder="0"
            style={{ fontSize: '4rem' }}
          />
          <input
            type="text"
            maxLength={1}
            className="w-20 h-20 text-center text-4xl font-bold border border-gray-300 rounded-lg"
            placeholder="0"
            style={{ fontSize: '4rem' }}
          />
          <input
            type="text"
            maxLength={1}
            className="w-20 h-20 text-center text-4xl font-bold border border-gray-300 rounded-lg"
            placeholder="0"
            style={{ fontSize: '4rem' }}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="absolute px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100"
          style={{
            left: '200px',
            top: '260px',
            width: '150px'
          }}
        >
          Enviar
        </button>
      </div>
    </LoginLayout>
  );
};

export default VerifyCode;


