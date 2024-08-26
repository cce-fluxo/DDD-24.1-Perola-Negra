"use client"

import React, { useState } from 'react';
import Link from 'next/link';

function MenuMobile() {

    const [isOpen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isOpen);
    }


  return (
    
    <div className='h-full w-full'>
        
        <button onClick={toggleMenu} className="w-full h-full bg-contain bg-black">
        </button>
        <div className={`flex w-[27vw] ${isOpen ? '' : 'hidden'}`}>
            <ul className='w-full flex flex-col justify-around items-center bg-white z-10 rounded-b-xl'>
            <li className='w-full text-center'>
                    <Link href={'/home'} className='w-full flex justify-center p-3 hover:bg-[#E0E0E0] hover:text-white'>
                        Home
                    </Link>
                </li>

                <li className='w-full text-center'>
                    <Link href={'/banner'} className='w-full flex justify-center p-3 hover:bg-[#E0E0E0] hover:text-white'>
                        Banner
                    </Link>
                </li>

                <li className='w-full text-center'>
                    <Link href={'/produtos'} className='w-full flex justify-center p-3 hover:bg-[#E0E0E0] hover:text-white'>
                        Produtos
                    </Link>
                </li>

                <li className='w-full text-center'>
                    <Link href={'#'} className='w-full flex justify-center p-3  hover:bg-[#E0E0E0] hover:text-white'>
                        Pedidos
                    </Link>
                </li>

                <li className='w-full text-center'>
                    <Link href={'controle-de-estoques'} className='w-full flex justify-center p-3 hover:bg-[#E0E0E0] hover:text-white'>
                        Estoque
                    </Link>
                </li>

                <li className='w-full text-center'>
                    <Link href={'/cupons'} className='w-full flex justify-center p-3  hover:bg-[#E0E0E0] hover:text-white'>
                        Cupons
                    </Link>
                </li>


            </ul>
        </div>
    </div>
  )
}

export default MenuMobile