import React from 'react'

interface props{
    numero: string;

}
function Categorias({numero}: props) {
    return (
        <div className='flex justify-start items-center bg-[#D9D9D9]'>{/**Categoria1 */}
            <span className='ml-6 mr-2 pr-2 border-r-4 border-black font-bold text-sm md:text-xl'>{numero}</span><span className='text-xs md:text-xl'>Categoria {numero}</span>
        </div>
    )
}

export default Categorias