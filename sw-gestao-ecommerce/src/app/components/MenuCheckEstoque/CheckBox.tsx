import React from "react";
interface props{
    nome: string;
}
function CheckBox({nome}:props) {
  return (
    <li>
      <label className="inline-flex items-center text-sm hover:text-[#B0B0B0]">
        <input
          type="checkbox"
          className="mr-2 appearance-none w-3 h-3 border border-[#FCFCFC] rounded-sm checked:bg-white"
        />
        {nome}
      </label>
    </li>
  );
}

export default CheckBox;
