"use client";
import React from "react";
import Header from "../../../components/Header";
import CategoriasNav from "../../../components/CategoriasNav";
import Produto from "../../../components/Produto";
import TituloCategoria from "../../../components/TituloCategoria";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import api from "@/services/axios";
import { url } from "inspector";
import { getURL } from "next/dist/shared/lib/utils";

const Categoria1 = () => {
  const [produtos, setProdutos] = React.useState([]);

  async function getProdutos() {
    try {
      const response = await api.get("/categoria/20/produtos");
      setProdutos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("erro de req: ", error);
    }
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
<<<<<<< HEAD:sw-gestao-ecommerce/src/app/(pages)/produtos/categoria-12/page.tsx
        <div className="flex flex-wrap w-11/12 mx-auto justify-start">
=======
        <div className="flex flex-wrap w-11/12 mx-auto justify-center">
>>>>>>> be8c1e79e132a01640c20a94b5fde776a03909f2:sw-gestao-ecommerce/src/app/(pages)/produtos/categoria-1/page.tsx
          {produtos.map((produto) => (
            <Produto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.img_principal}
              variant="secondary"
            ></Produto>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoria1;
