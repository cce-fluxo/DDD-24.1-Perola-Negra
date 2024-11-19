import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CategoriaPage = () => {
  const router = useRouter();
  const { categoria } = router.query; // Pega a categoria da URL
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProdutos = async () => {
      if (!categoria) return; // Aguarda a categoria estar definida
      try {
        const response = await axios.get(
          `https://api-24-1-perola-negra-back-1.onrender.com/categoria/${categoria}`
        );
        setProdutos(response.data.produtos); // Armazena os produtos
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    getProdutos();
  }, [categoria]);

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  if (!produtos.length) {
    return <div>Nenhum produto encontrado para esta categoria.</div>;
  }

  return (
    <div>
      <h1>Produtos da categoria: {categoria}</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaPage;
