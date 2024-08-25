import React from "react";
import Header from "@/app/components/Header";
import TituloCategoria from "@/app/components/TituloCategoria";
import CardMobile from "@/app/components/tabela/CardMobile";
import NavegacaoCupons from "@/app/components/tabela/NavegacaoCupons";

function Cupons() {
  {
    /*bg-[#F2F2F2] */
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#F2F2F2]">
      {/*"Body" da página*/}

      <div className="flex flex-col justify-around h-[100vh] w-[80vw] py-3 lg:w-[99vw]">
        {/*conteudo da página*/}

        <div className="w-full h-[10vh] flex lg:h-[15vh]">
          {/*conteudo 1 da página*/}
          <TituloCategoria titulo="Cupons Ativos"></TituloCategoria>
          {/*Nome da página*/}
        </div>

        <div className="hidden w-[40vw] h-[7vh] lg:flex">
          {/*Navegacao conteúdo LG*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>

        <div className="w-full h-[75vh] overflow-y-auto lg:w-[95vw] lg:h-[65vh] lg:mx-auto">
          {/* Conteudo 2 da pagina*/}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:hidden">
            {/* Conteúdo mobile até md */}
            <CardMobile
              nome="CUPOM10"
              validade="12/03/2024"
              desconto="25"
              qtdUsada="29"
              codigo="#123123"
            ></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
            <CardMobile></CardMobile>
          </div>

          {/* Conteúdo lg e acima */}
          {/* a1n --> elemento a linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células)*/}
          <div className="hidden lg:flex">
            <table className="w-[100vw] text-2xl text-center bg-[#F2F2F2]">
              <thead className="bg-[#BDBDBD] h-[10vh] text-xl text-white">
                <tr>
                  <th className="font-light bg-[#BDBDBD] rounded-tl-2xl">Coluna 1</th>{/*a11*/}
                  <th className="font-light bg-[#BDBDBD]">Coluna 2</th>
                  <th className="font-light bg-[#BDBDBD] rounded-tr-2xl">Coluna 3</th>{/*a1n*/}
                </tr>
              </thead>
              <tbody className="h-[25vh]">
                <tr>
                  <td className="border-2 border-[#E0E0E0] border-t-0 bg-white border-l-0">DDDIVOS</td>{/*b11*/}
                  <td className="border-2 border-[#E0E0E0] border-t-0 bg-white">#123456</td>
                  <td className="border-2 border-[#E0E0E0] border-t-0 border-r-0 bg-white">25% de<br></br>desconto</td>{/*b1n*/}
                </tr>
                <tr>{/*Tem que ser a ultima linha da tabela*/}
                  <td className="border-2 border-[#E0E0E0] border-b-0 border-l-0 bg-white">Dado 4</td>{/*bn1*/}
                  <td className="border-2 border-[#E0E0E0] border-b-0 bg-white">Dado 5</td>
                  <td className="border-2 border-[#E0E0E0] border-b-0 border-r-0 bg-white">Dado 6</td>{/*bnn*/}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full h-[8vh] lg:hidden">
          {/*conteudo 3 da página*/}
          <NavegacaoCupons activeLink={1}></NavegacaoCupons>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
