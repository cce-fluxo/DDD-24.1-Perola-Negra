import React from 'react';

interface BotaoSalvarProps {
  nome: string; // Nome do botão
  onClick?: () => void; // Função onClick, opcional
}

const BotaoSalvar: React.FC<BotaoSalvarProps> = ({ nome, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {nome}
    </button>
  );
};

export default BotaoSalvar;

