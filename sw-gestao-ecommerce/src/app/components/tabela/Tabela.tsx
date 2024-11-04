"use client"
import { Field, Form, ErrorMessage } from "formik";
import React, {useEffect, useState} from "react";
import { date } from "yup";
import api from "@/services/axios";
import getCupom from "@/app/funcoes/getCupom";

interface Props {
  isAdicionar?: boolean; // Verifica se a tabela é da página adicionarCupons ou Cupons.
}


const Tabela: React.FC<Props> = ({ isAdicionar = false }) => {
  const [cupons, setCupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false); // Estado para verificar o carregamento

  useEffect(() => {
    (async () => {
      setLoading(true); // Inicia o carregamento
      const data = await getCupom();
      setCupons(data);
      setLoading(false); // Termina o carregamento
    })();
  }, []);


  const formatarData = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  if (loading) {
    return <p className="text-center text-2xl mt-4">Carregando...</p>;
  }

  if (cupons.length === 0 && !isAdicionar){
    const mensagem = <p className="text-2xl">Não há cupons disponíveis</p>
    return mensagem
  }
  
  return (
    <table className="w-[100vw] text-2xl text-center bg-[#F2F2F2] border-collapse">
      {/* a1n --> elemento da linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células) */}
      <thead className="sticky top-0 bg-[#BDBDBD] h-[9vh] text-xl text-white">
      {!isAdicionar && (
        <>
        <tr>
          <th className="font-light border-none bg-[#BDBDBD]">Cupom</th> {/* a11 */}
          <th className="font-light border-none bg-[#BDBDBD]">Código</th>
          <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
          <th className="font-light border-none bg-[#BDBDBD]">Qt. de usos</th>
          <th className="font-light bg-[#BDBDBD]">Válido até</th> {/* a1n */}
        </tr>
        </>)}
        
        {isAdicionar && (
        <>
        <tr>
          <th className="font-light border-none bg-[#BDBDBD]">Cupom</th> {/* a11 */}
          <th className="font-light border-none bg-[#BDBDBD]">Código</th>
          <th className="font-light border-none bg-[#BDBDBD]">Detalhes</th>
          <th className="font-light bg-[#BDBDBD]">Válido até</th> {/* a1n */}
        </tr>
        </>)}
      </thead>

      <tbody className={`${isAdicionar ? 'h-[15vh]' : ''}`}>
      {!isAdicionar &&
          cupons.map((cupom)  => (
            <tr key={cupom.id}>
              <td className="py-5 px-14 border-2 border-[#E0E0E0] border-t-0 bg-white border-l-0">{cupom.nome}</td>
              <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">#{cupom.codigo}</td>
              <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">{cupom.PR_desconto}% de<br></br> desconto</td>
              <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 bg-white">-</td>
              <td className="border-2 py-5 px-4 border-[#E0E0E0] border-t-0 border-r-0 bg-white">
                {formatarData(cupom.DT_validade)}
              </td>
            </tr>
          ))}

        {isAdicionar && (
          <>
          <tr> {/* Tem que ser a ultima linha da tabela */}
        
          <td className={`border-2 px-14 border-[#E0E0E0] border-b-0 border-l-0 bg-white ${isAdicionar ? 'border-t-0': ''}`}>

            <Field
              id="nome"
              name="nome"
              placeholder="Nome"
              className='w-full h-full border-b-2 focus:outline-none'
            />
            <ErrorMessage name = "nome" component="div" className="text-red-500 text-sm"/>

          </td> {/* bn1 */}
          <td className={`border-2 px-4 border-[#E0E0E0] border-b-0 bg-white ${isAdicionar ? 'border-t-0' : ''}`}>
            
          <Field
              id="codigo"
              name="codigo"
              placeholder="Código"
              className='w-full h-full border-b-2 focus:outline-none'
            />
            <ErrorMessage name = "codigo" component="div" className="text-red-500 text-sm"/>

          </td>
          <td className={`border-2 px-4 border-[#E0E0E0] border-b-0 bg-white ${isAdicionar ? 'border-t-0' : ''}`}>
            
          <Field
              id="PR_desconto"
              name="PR_desconto"
              placeholder="Desconto"
              className='w-full h-full border-b-2 focus:outline-none'
            />
            <ErrorMessage name = "PR_desconto" component="div" className="text-red-500 text-sm"/>
          </td>
          <td className={`border-2 px-4 border-[#E0E0E0] border-b-0 border-r-0 bg-white ${isAdicionar ? 'border-t-0' : ''}`}>
          <Field
              id="DT_validade"
              name="DT_validade"
              type="date"
              className='w-full h-full border-b-2 focus:outline-none'
            />
            <ErrorMessage name = "DT_validade" component="div" className="text-red-500 text-sm"/>  
          </td> {/* bnn */}
        </tr>
          </>
        )}

      </tbody>
    </table>
  );
};

export default Tabela;
