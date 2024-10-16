// src/app/components/BotaoSalvar.tsx
import React from 'react';

interface BotaoSalvarProps {
  nome: string; // ou o tipo apropriado que você espera
}

const BotaoSalvar: React.FC<BotaoSalvarProps> = ({ nome }) => {
  return (
    <button type="button">
      {nome}
    </button>
  );
};

export default BotaoSalvar;
