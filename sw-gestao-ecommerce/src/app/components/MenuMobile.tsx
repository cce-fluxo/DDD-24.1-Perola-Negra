"use client"

import Link from 'next/link';
import React, { useState } from 'react'

function MenuMobile() {

    const [isOpen, setIsopen] = useState(true);

    const toggleMenu = () => {
        setIsopen(!isOpen);
    }


  return (
    
    <div className='w-full h-full border-2 border-blue-700'>
        <button onClick={toggleMenu} className='w-full h-full border-2 bg-slate-600'>
        </button>
        <div className={`w-full h-[18vh] z-10 flex flex-col p-3 ${isOpen ? '' : 'hidden'}`}>
            <ul>
                <li>
                    <Link href={'#'}>
                        Banner
                    </Link>
                </li>

                <li>
                    <Link href={'#'}>
                        Banner
                    </Link>
                </li>

                <li>
                    <Link href={'#'}>
                        Banner
                    </Link>
                </li>

                <li>
                    <Link href={'#'}>
                        Banner
                    </Link>
                </li>


            </ul>
        </div>
        
    </div>
  )
}

export default MenuMobile