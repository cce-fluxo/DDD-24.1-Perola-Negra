"use client"

import React, { useState } from 'react'

function MenuEscolherLoja() {
    const [isOpen, setIisOpen] = useState(false);
    const toggleMenu = ()=>{
        setIisOpen(!isOpen);
    }
  return (
    <div className={`w-full ${isOpen ? 'h-[70vh]'  : 'h-full' } hidden flex-col justify-between lg:flex rounded-xl`}>{/**MenuEscolherLoja lg*/}

                <button onClick={toggleMenu} className="w-full appearance-none flex justify-around items-center h-full max-h-[7vh]">{/**Setinha+titulo*/}
                  <div className="flex items-center w-[65%] font-semibold text-lg">Escolher loja</div>
                  <div className={`w-[2vw] h-[2vh] ${isOpen ? "bg-[url('/images/setinhaCimaMenuLoja.png')]" : "bg-[url('/images/setinhaBaixoMenuLoja.png')]" } bg-center bg-no-repeat bg-contain`}></div>
                </button>{/**Setinha*/}

                <div className={`w-[28vw] h-[85%] bg-[#1A1A1A] rounded-xl flex justify-center ${isOpen ? '' : 'hidden'}`}> {/**Menu*/}
                  <ul className="w-[80%] flex flex-col justify-around text-white">
                    <li>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="mr-2 appearance-none w-4 h-4 border-2 border-[#FCFCFC] rounded-sm checked:bg-white" />
                        Shopping Barra da Tijuca
                      </label>
                    </li>
                    
                  </ul>
                </div>

              </div>
  )
}

export default MenuEscolherLoja