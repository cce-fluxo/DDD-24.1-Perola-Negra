import React from 'react';
import Link from 'next/link';

interface Props{
    activeLink: number
}

{/*Defina o link ativo passando o número correspondente de activeLink (1 para o primeiro, 2 para o segundo, etc.)*/ }
function NavegacaoCupons({activeLink}: Props) {
  return (
    <div className='w-full h-full bg-white flex justify-around items-center rounded-2xl lg:rounded-lg'>

      <Link href={'cupons'} className={`flex items-center text-black md:text-2xl ${activeLink == 1 ? 'underline' : 'text-opacity-50'}`}>Cupons ativos
      </Link>

      <Link href={'cupons/adicionar'} className={`flex items-center md:text-2xl text-black ${activeLink == 2 ? 'underline' : 'text-opacity-50'}`}>Adicionar cupons
      </Link>

      {/* Adicione mais links conforme necessário */}
    </div>
  );
};

export default NavegacaoCupons;
