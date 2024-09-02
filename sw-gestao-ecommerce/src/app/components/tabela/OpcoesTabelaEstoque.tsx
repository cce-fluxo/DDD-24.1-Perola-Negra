"use client";

import React, { useState } from "react";

interface Props {
  isTabela?: boolean;
}

function OpcoesTabelaEstoque({ isTabela = false }: Props) {
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);

  const handleAdd = () => setShowPopupAdd(true);
  const handleEdit = () => setShowPopupEdit(true);
  const handleDelete = () => setShowPopupDelete(true);

  const handleCloseAdd = () => setShowPopupAdd(false);
  const handleCloseEdit = () => setShowPopupEdit(false);
  const handleCloseDelete = () => setShowPopupDelete(false);

  const handleConfirmAdd = () => {
    // Lógica para adicionar
    setShowPopupAdd(false);
  };

  const handleConfirmEdit = () => {
    // Lógica para editar
    setShowPopupEdit(false);
  };

  const handleConfirmDelete = () => {
    // Lógica para excluir
    setShowPopupDelete(false);
  };

  return (
    <>
      <button
        onClick={handleAdd}
        className={`bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}
      ></button>
      <button
        onClick={handleEdit}
        className={`bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}
      ></button>
      <button
        onClick={handleDelete}
        className={`bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain hover:border-[#F2F2F2] hover:border ${isTabela ? 'w-[3vw] h-[3vh]' : 'w-[5vw]'}`}
      ></button>

      {showPopupAdd && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-3xl p-16 w-[950px] h-[450px]">
            <span
              className="absolute top-10 right-12 text-black text-4xl font-bold cursor-pointer"
              onClick={handleCloseAdd}
            >
              X
            </span>
            <div className="flex flex-col items-center justify-between space-y-4 h-full content-between">
              <h1 className="text-4xl font-bold text-black">Adicionar Item</h1>
              <p className="text-2xl text-black">Tem certeza que deseja adicionar este item?</p>
              <div className="w-full content-end flex justify-center items-center space-x-20">
                <button
                  onClick={handleCloseAdd}
                  className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-full w-full max-w-[250px]"
                >
                  NÃO
                </button>
                <button
                  onClick={handleConfirmAdd}
                  className="py-4 px-12 bg-black text-white text-3xl font-bold border-4 border-white rounded-full w-full max-w-[250px]"
                >
                  SIM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPopupEdit && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-3xl p-16 w-[950px] h-[450px]">
            <span
              className="absolute top-10 right-12 text-black text-4xl font-bold cursor-pointer"
              onClick={handleCloseEdit}
            >
              X
            </span>
            <div className="flex flex-col items-center justify-between space-y-4 h-full content-between">
              <h1 className="text-4xl font-bold text-black">Editar Item</h1>
              <p className="text-2xl text-black">Tem certeza que deseja editar este item?</p>
              <div className="w-full content-end flex justify-center items-center space-x-20">
                <button
                  onClick={handleCloseEdit}
                  className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-full w-full max-w-[250px]"
                >
                  NÃO
                </button>
                <button
                  onClick={handleConfirmEdit}
                  className="py-4 px-12 bg-black text-white text-3xl font-bold border-4 border-white rounded-full w-full max-w-[250px]"
                >
                  SIM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPopupDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-3xl p-16 w-[950px] h-[450px]">
            <span
              className="absolute top-10 right-12 text-black text-4xl font-bold cursor-pointer"
              onClick={handleCloseDelete}
            >
              X
            </span>
            <div className="flex flex-col items-center justify-between space-y-4 h-full content-between">
              <h1 className="text-4xl font-bold text-black">Excluir Item</h1>
              <p className="text-2xl text-black">Tem certeza que deseja excluir este item?</p>
              <div className="w-full content-end flex justify-center items-center space-x-20">
                <button
                  onClick={handleCloseDelete}
                  className="py-4 px-12 bg-white text-black text-3xl font-bold border-4 border-black rounded-full w-full max-w-[250px]"
                >
                  NÃO
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="py-4 px-12 bg-black text-white text-3xl font-bold border-4 border-white rounded-full w-full max-w-[250px]"
                >
                  SIM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OpcoesTabelaEstoque;

