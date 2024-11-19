"use client";
import React from "react";
import Header from "../../../components/Header";
import CategoriasNav from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import api from "@/services/axios";

const Categoria1 = () => {
  const [produtos, setProdutos] = React.useState([]);

  async function getProdutos() {
    const response = await api.get("/produto");
    setProdutos(response.data);
    console.log(response.data);
  }

  React.useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <HeaderMobile titulo="LOGO"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="LOGO" bg="white"></Header>
      </div>
      <CategoriasNav />
      <div className="">
        <TituloCategoria titulo="Categoria 1" />
        <div className="flex flex-wrap w-11/12 mx-auto justify-center">
          {produtos.map((produto) => (
            <Produto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem="/images/placeholder.png"
              variant="secondary"
            ></Produto>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoria1;
