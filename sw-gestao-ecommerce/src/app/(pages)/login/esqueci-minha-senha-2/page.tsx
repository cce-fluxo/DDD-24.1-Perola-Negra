"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import LoginFormato from "@/app/components/LoginFormato";

const VerifyCode: React.FC = () => {
  const router = useRouter();
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number) => {
    if (inputRefs.current[index]?.value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    router.push('/login/esqueci-minha-senha-3');
  };

  return (
    <LoginFormato>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-[500px] text-black text-[48px] font-semibold leading-[1.2] break-words mb-8 -mt-6">
          Esqueci<br /> minha senha
        </div>
        
        <div className="flex flex-col items-start p-8 w-[calc(100%-70px)] max-w-[550px] -mt-10">
          <p className="text-left mb-6 text-lg">
            Insira o código que foi enviado para o seu e-mail para que você possa alterar a senha
          </p>

          <div className="flex space-x-4 mb-6">
            {Array(4).fill(0).map((_, index) => (
              <input
                key={index}
                ref={(el: HTMLInputElement | null) => { inputRefs.current[index] = el; }}
                type="text"
                maxLength={1}
                className="w-20 h-20 text-center text-4xl font-bold border border-gray-300 rounded-lg placeholder:text-transparent"
                placeholder="0"
                onChange={() => handleInputChange(index)}
              />
            ))}
          </div>

          <div className="flex justify-center w-full">
            <button
              type="button"
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

export default VerifyCode;
