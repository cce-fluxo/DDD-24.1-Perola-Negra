"use client";
import React from "react";
import Header from "@/app/components/Header";
import CategoriasNav from "@/app/components/CategoriasNav";
import Produto from "@/app/components/Produto";
import TituloCategoria from "@/app/components/TituloCategoria";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
import api from "@/services/axios";
import { useParams } from "next/navigation";

const CategoriaPage = () => {
  const { categoriaSlug } = useParams(); // Captura o slug da categoria na URL
  const [produtos, setProdutos] = React.useState([]);
  const [categoria, setCategoria] = React.useState(null);

  async function getCategoriaData() {
    try {
      // Obter informações da categoria
      const categoriaResponse = await api.get(`/categoria/20`); // mudar 20 para ${categoriaSlug}
      setCategoria(categoriaResponse.data);

      // Obter produtos da categoria
      const produtosResponse = await api.get(`/categoria/20/produtos`); // mudar 20 para ${categoriaSlug}
      setProdutos(produtosResponse.data);
    } catch (error) {
      console.error("Erro ao carregar dados da categoria:", error);
    }
  }

  React.useEffect(() => {
    getCategoriaData();
  }, [categoriaSlug]);

  if (!categoria) {
    return (
      <div className="justify-center align-middle font-extrabold text-4xl">
        Carregando dados da categoria...
      </div>
    );
  }

  return (
    <div>
      {/* Header Mobile */}
      <HeaderMobile titulo="LOGO"></HeaderMobile>

      {/* Header para dispositivos LG */}
      <div className="hidden lg:flex lg:justify-center w-full overflow-hidden lg:h-[11vh]">
        <Header titulo="LOGO" bg="white"></Header>
      </div>

      {/* Navegação das Categorias */}
      <CategoriasNav />

      {/* Conteúdo da Categoria */}
      <div>
        <TituloCategoria titulo={categoria.nome} />
        <div className="flex flex-wrap w-11/12 mx-auto justify-start">
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem || "/images/placeholder.png"}
                variant="secondary"
              />
            ))
          ) : (
            <p className="text-gray-500">
              Nenhum produto encontrado para esta categoria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriaPage;
