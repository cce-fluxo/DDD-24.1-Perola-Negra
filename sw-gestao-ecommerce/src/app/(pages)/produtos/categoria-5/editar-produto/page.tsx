import React from "react";
import Header from "../../../../components/Header";
import ProdutoForm from "../../../../components/ProdutoForm";

const EditarProduto: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="pt-40 px-12 justify-center">
        <ProdutoForm></ProdutoForm>
      </div>
    </div>
  );
};

export default EditarProduto;
