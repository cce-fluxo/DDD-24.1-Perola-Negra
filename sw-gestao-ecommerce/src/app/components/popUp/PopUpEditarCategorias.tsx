import React from "react";
import Categorias from "./Categorias";

interface props{
  togglePopUp: () => void;
}

function EditarCategorias({togglePopUp}: props) {
 
  return (
    <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">{/**Body - aplica efeito de background tapado*/}
      <div className="w-[80vw] h-[60vh] lg:w-[60vw] lg:h-[55vh] max-w-4xl max-h-96  flex flex-col justify-between p-6 rounded-xl bg-[#F5F5F5]">
        {/*Espaço para o conteudo*/}
        <div className="h-[15%] flex justify-end items-center">
          {/**Titulo*/}
          <span className="mx-auto font-bold text-xl md:text-4xl">
            Categorias
          </span>
          <button onClick={togglePopUp} className='p-5 bg-[url("/icons/iconeX.png")] bg-no-repeat bg-center'></button>{/**Botao "X"*/}
        </div>
        <div className="h-[65%] grid grid-cols-2 grid-rows-3 grid-flow-col gap-2 mt-3">
          {/**Espaço conteudo principal*/}
          <Categorias numero="1"></Categorias>
          <Categorias numero="2"></Categorias>
          <Categorias numero="3"></Categorias>
          <Categorias numero="4"></Categorias>
          <button className="flex justify-start items-center bg-[#D9D9D9] indent-6 lg:text-2xl font-semibold">
            {/**Botao adicionar categoria*/}+ Adicionar categoria
          </button>
        </div>
        <div className="flex justify-center h-[15%] items-center">
          {/**Esapaço Salvar*/}
          <button onClick={togglePopUp} className="py-1 px-7 rounded-3xl bg-black text-white mt-4">
            {/**Botao Salvar*/}
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarCategorias;
