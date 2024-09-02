"use client";

import React from "react";

const PopUpDesconto = () => {
    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-xl w-[45vw] pl-20 py-8 pr-10">
                <div className="flex flex-row w-full h-full">
                    <div className="flex-auto">
                        <div className="flex flex-col items-center h-full">
                            <div className="flex-auto font-bold text-3xl pb-4">DESCONTO</div>
                            <div className="flex-auto text-center text-lg pb-8">Ao salvar, eu concordo que estarei aplicando esse desconto em todos os produtos da loja até o dia estipulado.</div>
                            <div className="flex flex-row flex-auto gap-16 pb-4">
                                <div className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2">5%</div>
                                <div className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2">20/03/2023</div>
                            </div>
                            <div className="flex flex-row flex-auto gap-16 pb-8">
                                <div className="w-56 text-center text-lg">Porcentagem</div>
                                <div className="w-56 text-center text-lg">Data</div>
                            </div>
                            <button className="bg-black flex-auto w-[7vw] text-white rounded-3xl p-2">Salvar</button>
                        </div>
                    </div>
                    <div>
                        <button className="font-bold text-3xl px-2">X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpDesconto;