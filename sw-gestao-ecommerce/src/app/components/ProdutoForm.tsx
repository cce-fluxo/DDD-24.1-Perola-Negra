"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProdutoForm: React.FC = () => {
  const [quantidade, setQuantidade] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelect = (value: string) => {
    setQuantidade(value);
    setDropdownOpen(false);
  };

  return (
    <div className="mb-4 bg-neutral-100 px-5 py-12 rounded-3xl w-full flex flex-col md:flex-row justify-between md:justify-evenly gap-5 md:gap-[5%]">
      <div className="flex justify-center items-center">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="relative w-48 h-48 bg-neutral-200 rounded-lg">
            {!selectedImage && (
              <Image
                src="/images/uploadproduto.png" // Substitua pelo caminho correto da sua imagem
                alt="Upload"
                draggable={false}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected"
                draggable={false}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
          </div>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div className="flex flex-col justify-between w-full md:w-1/4 text-neutral-600">
        <input
          className="text-lg font-medium placeholder:text-neutral-600 underline underline-offset-4 decoration-zinc-200 bg-transparent focus:outline-none"
          placeholder="Nome do produto"
        />
        <textarea
          className="underline underline-offset-4 decoration-zinc-200 py-4 bg-transparent placeholder:text-neutral-600 focus:outline-none resize-none"
          placeholder="Faça uma breve descrição do produto e dos elementos que ele contém"
          rows={3}
        />
        <div className="flex items-center font-medium">
          <span className="mr-1">R$</span>
          <input
            className="bg-transparent placeholder:text-neutral-600 focus:outline-none"
            placeholder="0,00"
            type="currency"
          />
        </div>
        <div className="relative bg-neutral-200 w-11/12 rounded-xl py-1.5 px-3 mt-3 flex justify-between items-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full"
          >
            <span className="mr-2 text-left">
              {quantidade || "Insira a quantidade total do produto"}
            </span>
            <Image
              className="self-center"
              src={"/icons/down-chevron.png"}
              alt="Seta para baixo"
              width={15}
              height={20}
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-lg">
              {["abaixo de 1000", "1000", "2000", "3000", "4000", "5000+"].map(
                (value) => (
                  <li
                    key={value}
                    onClick={() => handleSelect(value)}
                    className="px-4 py-2 cursor-pointer hover:bg-neutral-100"
                  >
                    {value}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-5 mt-6 md:mt-0 place-self-end">
        <button className="py-1 px-6 bg-neutral-500 text-white rounded-xl">
          Excluir
        </button>
        <button className="py-1 px-6 bg-neutral-500 text-white rounded-xl">
          Salvar
        </button>
      </div>
    </div>
  );
};

export default ProdutoForm;
