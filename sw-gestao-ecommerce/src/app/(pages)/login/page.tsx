"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background

const LoginForm: React.FC = () => {
  const router = useRouter();

// Não recarrega a página
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home"); // Ir para outra página
  };

  return (
    // Layout do formulário de login
    <LoginLayout>
      <div
        className="absolute"
        style={{
          width: '300px',
          height: '60px',
          left: '85px',
          top: '280px',
          color: 'black',
          fontSize: '52px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          wordWrap: 'break-word',
        }}
      >
        Entrar
      </div>

      <form onSubmit={handleSubmit} className="absolute flex flex-col items-center justify-center p-8"
        style={{
          left: '55px',
          top: '360px',
          width: 'calc(100% - 70px)',
          maxWidth: '500px',
        }}
      >
        <div className="mb-4 w-full">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Digite sua senha"
          />
          <a href="/login/esqueci-minha-senha-1" className="block text-sm text-gray-500 mt-2 hover:underline text-right">
            Esqueci minha senha
          </a>
        </div>
        <button
          type="submit"
          className="absolute px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100"
          style={{
            left: '200px',
            top: '270px',
            width: '150px'
          }}
        >
          Entrar
        </button>
      </form>
    </LoginLayout>
  );
};

export default LoginForm;


