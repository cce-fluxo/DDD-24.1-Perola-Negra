interface Props {
  nome: string;
  tipo?: "submit" | "button" | "reset";
}

function BotaoSalvar({ nome, tipo = "button" }: Props) {
  return (
    <button
      className="py-1 px-6 bg-neutral-500 text-white rounded-xl hover:bg-white hover:text-[#B0B0B0]"
      type={tipo}
    >
      {nome}
    </button>
  );
}

export default BotaoSalvar;
