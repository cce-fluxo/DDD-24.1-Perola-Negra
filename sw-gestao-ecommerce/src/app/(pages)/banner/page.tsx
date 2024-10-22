"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import FotoBanner from "@/app/components/FotoBanner";

function Banner() {
  const [imagens, setImagens] = useState<File[]>([]);

  // Função para lidar com o upload de arquivos
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const novosArquivos = Array.from(files).slice(0, 4 - imagens.length); // Limita a 4 imagens
      setImagens([...imagens, ...novosArquivos]);
    }
  };

  // Função para remover uma imagem específica
  const removerImagem = (index: number) => {
    const novasImagens = imagens.filter((_, i) => i !== index);
    setImagens(novasImagens);
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-between">
      {/* Body */}
      <div className="">
        {/* Header + pesquisar */}
        <div className="flex flex-col w-[85vw] lg:hidden pt-8">
          {/* Header Conteudo Mobile */}
          <HeaderMobile titulo="Banner"></HeaderMobile>
        </div>

        <div className="hidden lg:flex w-full h-[16vh]">
          {/* Header para dispositivos lg */}
          <Header></Header>
        </div>
      </div>

      <div className="w-[90vw] h-[70vh] mx-auto rounded-2xl my-auto flex flex-col justify-around p-6 bg-[#F0F0F0]">
        {/* Caixa Conteudo Principal */}
        <div className="flex gap-6 h-3/4 overflow-x-scroll flex-shrink-0">
          {/* Carrossel Fotos */}
          {imagens.map((imagem, index) => (
            <div
              key={index}
              className="relative flex flex-shrink-0 h-full justify-center items-center"
            >
              <img
                src={URL.createObjectURL(imagem)}
                alt={`imagem-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />

              <button
                onClick={() => removerImagem(index)}
                className="absolute bg-[url('/images/remover.png')] bg-no-repeat border-4 shadow-zinc-700 shadow-lg border-[#F2F2F2] bg-[#F2F2F2] bg-left indent-8 text-[#828282] rounded-lg p-2"
              >
                Remover
              </button>
            </div>
          ))}
          {imagens.length === 0 && <FotoBanner />}
        </div>

        <div className="h-[10%] flex items-center bg-[url('/icons/iconeUpload.png')] bg-no-repeat bg-left font-semibold">
          {/* Espaço Upload */}
          <label htmlFor="upload" className="ml-14 cursor-pointer">
            Faça Upload do arquivo ou arraste-o até aqui
            <input
              id="upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
        </div>

        <div className="flex justify-end items-center h-[10%]">
          {/* Botão Atualizar */}
          <button className="py-2 px-3 text-xl font-bold rounded-lg text-[#4F4F4F] bg-[#D9D9D9]">
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
