"use client"

import React, { useState } from 'react'

function MenuCheckbox() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full h-full justify-between rounded-xl bg-red-700">
            {/**MenuEscolherLoja lg */}
        
            <button onClick={toggleMenu} className="w-full flex justify-around items-center h-full border-2 border-black max-h-7">
                {/**Setinha+titulo*/}
                <div className="flex items-center w-[65%] font-semibold text-lg">M</div>
                <div className={`w-[2vw] h-[2vh] ${isOpen ? "bg-[url('/images/setinhaCimaMenuLoja.png')]" : "bg-[url('/images/setinhaBaixoMenuLoja.png')]" } bg-center bg-no-repeat bg-contain`}></div>
            </button>
        
            {isOpen && (
                <div className="absolute mt-3 w-[10vw] bg-[#1A1A1A] rounded-xl flex justify-center z-10">
                    {/**Menu Links*/}
                    <ul className="w-[80%] flex flex-col justify-around text-white">
                        <li>
                            <label className="inline-flex items-center text-sm">
                                <input type="checkbox" className="mr-2 appearance-none w-3 h-3 border-2 border-[#FCFCFC] rounded-sm checked:bg-white" />
                                P
                            </label>
                        </li>
                        {/* Adicione mais checkboxes conforme necessário */}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MenuCheckbox;
