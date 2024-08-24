"use client";

import React from "react";

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
          background: '#F0F0F0',
          borderRadius: '20px',
        }}
      >
        <div
          className="absolute"
          style={{
            width: '450px',
            height: '150px',
            left: '85px',
            top: '120px',
            color: 'black',
            fontSize: '48px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            wordWrap: 'break-word',
          }}
        >
          LOGO RESTAURANTE
        </div>

        {children}
      </div>
    </section>
  );
};

export default LoginLayout;
