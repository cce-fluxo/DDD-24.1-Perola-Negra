import React from 'react';
import Link from 'next/link';

interface Props {
    nomeLink: string; // nome do link
    pagina: string; // caminho da página para onde seu link leva '/produtos, /banner...'
    isUltimo?: boolean; // verifica se é o último link, para adicionar a borda arredonda
}

function LinkMenu({ nomeLink, pagina, isUltimo = false }: Props) {
  return (
    <li className='w-full text-center'>
      <Link 
        href={pagina} 
        className={`w-full flex justify-center p-3 hover:bg-[#E0E0E0] hover:text-white font-semibold md:text-2xl ${isUltimo ? 'rounded-b-xl' : ''}`}>
        {nomeLink}
      </Link>
    </li>
  );
}

export default LinkMenu;

