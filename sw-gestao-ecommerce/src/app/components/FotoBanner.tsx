import React from "react";

function FotoBanner() {
  return (
    <div className="flex min-w-[60%] justify-center items-center bg-[#BDBDBD]">
      {/**Foto1 */}
      <button className="rounded-lg p-2 bg-[#F2F2F2]">
        {/**Botao Excluir Foto*/}
        <div className="bg-[url('/images/remover.png')] bg-no-repeat bg-left indent-8 text-[#828282]">
          Remover
        </div>
      </button>
    </div>
  );
}

export default FotoBanner;
