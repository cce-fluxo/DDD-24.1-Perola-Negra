import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Produtos = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get(
          "https://api-24-1-perola-negra-back-1.onrender.com"
        );
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } finally {
        setLoading(false);
      }
    };

    getCategorias();
  }, []);

  if (loading) {
    return <div>Carregando categorias...</div>;
  }

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categorias.map((cat) => (
          <li key={cat.slug}>
            <Link href={`/produtos/${cat.slug}`}>{cat.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
