"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import LinkMenu from './LinkMenu';

function MenuMobile() {

    const [isOpen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isOpen);
    }


  return (
    
    <div className='h-full w-full'>
        
        <button 
        onClick={toggleMenu} 
        className={`w-full h-full bg-no-repeat bg-contain bg-center ${isOpen ? 'bg-[url("/images/iconeMenuMobileOnClick.png")]' : 'bg-[url("/images/iconeMenuMobile.png")]'}`}>
        {/**Botao do Menu */}
        </button>

        <div className={`flex w-[27vw] ${isOpen ? '' : 'hidden'}`}>{/**Menu*/}
            <ul className='w-full flex flex-col justify-around items-center bg-white rounded-b-xl z-10'>
                <LinkMenu pagina='/home' nomeLink='Home'></LinkMenu>
                <LinkMenu pagina='/banner' nomeLink='Banner'></LinkMenu>
                <LinkMenu pagina='/produtos' nomeLink='Produtos'></LinkMenu>
                <LinkMenu pagina='#' nomeLink='Pedidos'></LinkMenu>
                <LinkMenu pagina='/controle-de-estoque' nomeLink='Estoque'></LinkMenu>
                <LinkMenu pagina='/cupons' nomeLink='Cupons' isUltimo></LinkMenu>
            </ul>
        </div>
    </div>
  )
}

export default MenuMobile