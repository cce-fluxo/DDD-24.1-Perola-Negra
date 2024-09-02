"use client"

import React, { useState } from 'react'
import CheckBox
 from './MenuCheckEstoque/CheckBox';
function MenuLoja() {
    const [isOpen, setIisOpen] = useState(false);
    const toggleMenu = ()=>{
        setIisOpen(!isOpen);
    }
  return (
    <div className={`w-full ${isOpen ? 'h-[50vh]'  : 'h-full' } hidden flex-col justify-between lg:flex rounded-xl`}>{/**MenuEscolherLoja lg*/}

                <button onClick={toggleMenu} className="w-full appearance-none flex justify-center items-center h-full max-h-[5vh] xl:max-h-[6vh]">{/**Setinha+titulo*/}
                  <div className="flex items-center w-[65%] font-semibold">Escolher loja</div>
                  <div className={`w-[1vw] h-[1vh] ${isOpen ? "bg-[url('/images/setinhaCimaMenuLoja.png')]" : "bg-[url('/images/setinhaBaixoMenuLoja.png')]" } bg-center bg-no-repeat bg-contain`}></div>
                </button>{/**Setinha*/}

                <div className={`w-[24vw] h-[80%] max-w-72 py-4 bg-[#1A1A1A] rounded-xl flex justify-center ${isOpen ? '' : 'hidden'} z-30`}> {/**Menu Links*/}
                  <ul className="w-[80%] flex flex-col justify-around text-white">
                  <CheckBox nome='Todos'></CheckBox>
                  <CheckBox nome='Shopping de Campo Grande'></CheckBox>
                  <CheckBox nome='Shopping de Campo Grande'></CheckBox>  
                  <CheckBox nome='Shopping de Campo Grande'></CheckBox>  
                  <CheckBox nome='Shopping de Campo Grande'></CheckBox>  
                  <CheckBox nome='Shopping de Campo Grande'></CheckBox>      
                  </ul>
                </div>

              </div>
  )
}

export default MenuLoja