import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importando Link do Next.js

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex w-full md:w-3/4 bg-white relative z-10">
        <div className="flex flex-col items-start justify-between bg-gray-100 rounded-lg w-1/2 h-3/4 mx-16 mt-24 p-8">
          <div className="flex flex-col mt-8 ml-8">
            <h1 className="text-5xl font-bold">LOGO</h1>
            <h2 className="text-5xl font-bold mt-4">RESTAURANTE</h2>
          </div>

          <div className="flex flex-col items-start mt-8 ml-8">
            <h3 className="text-6xl font-bold mb-4">Entrar</h3>

            <div className="flex flex-col mt-8">
              <label className="text-lg font-semibold" htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="mt-4 p-2 border border-gray-300 rounded w-full"
                style={{ minWidth: '450px' }}
                placeholder="Digite seu e-mail"
              />

              <label className="text-lg font-semibold mt-4" htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                placeholder="Digite sua senha"
              />
              
              {/* Link "Esqueci minha senha" logo abaixo do input da senha */}
              <Link href="/recuperar-senha" className="text-gray-500 text-sm mt-1 self-end hover:underline">
                Esqueci minha senha
              </Link>
            </div>
          </div>

          <div className="flex mt-8 ml-48">
            {/* Botão "Entrar" agora redireciona para a página desejada */}
            <Link href="/home" className="bg-black text-white rounded-full py-4 px-14 text-center">
              Entrar
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 relative z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
      </div>

      <div className="absolute z-50" style={{ top: '34%', left: '39%'}}>
        <Image
          src="/images/mobilegame.png"
          alt="Mobile Game"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
};

export default LoginPage;

