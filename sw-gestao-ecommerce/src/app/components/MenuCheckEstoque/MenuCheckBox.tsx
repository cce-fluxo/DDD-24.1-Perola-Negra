"use client"

import React, { useState } from 'react'
import CheckBox from './CheckBox'
interface props {
    isCor?: boolean
    isTamanho?: boolean
    nome: string
}

function MenuCheckbox({nome, isCor=false, isTamanho=false}: props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`relative w-[80%] flex justify-center rounded-3xl mx-auto ${isTamanho ? 'max-w-24' : 'max-w-40'}`}>
            {/**MenuEscolherLoja lg */}
            <button onClick={toggleMenu} className="w-full px-1 py-1 rounded-3xl justify-center gap-2 items-center border border-black flex">
                {/**Setinha+titulo*/}
                <div className="">{nome}</div>
                <div className={`w-[1vw] h-[1vh] ${isOpen ? "bg-[url('/images/setinhaCimaTabelaEstoque.png')]" : "bg-[url('/images/setinhaBaixoTabelaEstoque.png')]" } bg-center bg-no-repeat bg-contain`}></div>
            </button>
        
            {isOpen && (
                <div className="absolute mt-14 px-5 bg-[#1A1A1A] rounded-xl flex justify-center z-10">
                    {/**Menu Links*/}
                    <ul className="w-[80%] flex flex-col justify-around items-start text-white ">
                        {isTamanho && (
                            <>
                        <CheckBox nome='Todos'></CheckBox>
                        <CheckBox nome='PP'></CheckBox>
                        <CheckBox nome='P'></CheckBox>
                        <CheckBox nome='M'></CheckBox>
                        <CheckBox nome='G'></CheckBox>
                        <CheckBox nome='GG'></CheckBox>
                        </>)}

                        {isCor && (
                            <>
                        <CheckBox nome='Todas'></CheckBox>
                        <CheckBox nome='Amarelo'></CheckBox>
                        <CheckBox nome='Vermelho'></CheckBox>
                        <CheckBox nome='Verde'></CheckBox>
                        <CheckBox nome='Cinza'></CheckBox>
                       </>)}
                        {/* Adicione mais checkboxes conforme necessário */}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MenuCheckbox;
