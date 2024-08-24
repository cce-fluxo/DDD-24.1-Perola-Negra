"use client";

import React from "react";
import Link from "next/link";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute"
        style={{
          width: '670px',
          height: '100%',
          left: '1250px',
          top: '0',
          backgroundColor: '#D9D9D9',
          zIndex: -1,
        }}
      />

      <div
        className="absolute"
        style={{
          left: 'calc(100% - 1105px)',
          bottom: '0',
          width: '100%',
          height: 'auto',
          maxWidth: '750px',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img 
          src="/images/mobilegame.png" 
          alt="Imagem do Jogo Móvel" 
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
        />
      </div>

      <div
        className="absolute"
        style={{
          width: '650px',
          height: '747px',
          left: '75px',
          right: '796px',
          top: '22px',
          bottom: '146px',
          background: 'white',
          borderRadius: '20px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="align-baseline font-bold text-5xl"
          style={{
            marginBottom: '140px',
          }}
        >
          LOGO RESTAURANTE
        </div>

        <div className="flex flex-col space-y-24">
          <Link href="/banner" className="text-5xl hover:underline font-bold">
            Banner
          </Link>
          <Link href="/produtos" className="text-5xl hover:underline font-bold">
            Produtos
          </Link>
          <Link href="/fluxo-de-pedidos" className="text-5xl hover:underline font-bold">
            Fluxo de Pedidos
          </Link>
          <Link href="/controle-de-estoques" className="text-5xl hover:underline font-bold">
            Controle de Estoques
          </Link>
        </div>

        {children}
      </div>

      <div
        className="absolute"
        style={{
          bottom: '0px',
          left: '80px',
          padding: '10px',
        }}
      >
        <a className="text-3xl">Sair</a>
      </div>
    </section>
  );
};

export default LoginLayout;

