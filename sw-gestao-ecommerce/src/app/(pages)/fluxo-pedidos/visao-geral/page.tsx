import React, { Fragment } from "react";
import HeaderFluxoDePedidos from "../../../components/HeaderFluxoDePedidos";
import FluxoDePedidosNav from "@/app/components/FluxoDePedidosNav";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";

function VisaoGeral() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Header titulo="FLUXO DE PEDIDOS" bg="transparent"></Header>
      <FluxoDePedidosNav></FluxoDePedidosNav>
      <div className="pt-52 h-full pb-8">
        <div className=" bg-gray-100 flex flex-row flex-auto w-screen h-full gap-12 px-20">
          <div className="flex flex-col flex-auto w-32 gap-8">
            <div className="bg-white flex-auto h-64 rounded-xl border border-gray-300">
              <div className="flex flex-col h-full px-6 py-4">
                <div className="text-gray-400">Calendário</div>
                <div className="flex justify-end">
                  <div className="border border-gray-400 rounded-xl w-24 px-4 py-1">
                    <div className="text-xl">Mês</div>
                  </div>
                </div>
                <div className="flex flex-auto items-center justify-center">
                  calendario
                </div>
              </div>
            </div>
            <div className="bg-white flex-auto h-40 rounded-xl">
              <div className="flex flex-row h-full text-center items-center justify-center pr-20 pl-4 gap-4">
                <div className="flex flex-auto w-20">
                  <div className="flex flex-auto w-20 justify-center text-4xl font-bold">
                    60%
                  </div>
                </div>
                <div className="flex flex-initial w-28 text-gray-400">
                  As vendas este mês aumentaram 60% a mais que o anterior
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto w-96 gap-8">
            <div className="bg-white flex-auto h-28 rounded-xl">
              <div className="flex flex-col h-full py-6">
                <div className="flex flex-row flex-auto h-96 items-center justify-center text-4xl font-bold">
                  <div className="flex flex-auto justify-center w-1/3">20</div>
                  <div className="flex flex-auto justify-center w-1/3">30</div>
                  <div className="flex flex-auto justify-center w-1/3">40</div>
                </div>
                <div className="flex flex-row flex-auto h-64 items-center justify-center text-2xl">
                  <div className="flex flex-auto justify-center w-1/3">
                    Últimos Pedidos
                  </div>
                  <div className="flex flex-auto justify-center w-1/3">
                    Pedidos Enviados
                  </div>
                  <div className="flex flex-auto justify-center w-1/3">
                    Pedidos Entregues
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex-auto h-72 rounded-xl">
              <div className="flex flex-col h-full px-8 py-4">
                <div className="flex flex-auto h-36 pb-2 border-b-2">
                  <div className="flex flex-col h-full w-full">
                    <div className="text-gray-400">Gráfico de Vendas</div>
                    <div className="text-2xl text-right">Março de 2023</div>
                    <div className="font-bold text-5xl">2000</div>
                    <div className="text-gray-400">
                      Produtos vendidos no mês
                    </div>
                  </div>
                </div>
                <div className="flex flex-auto h-64 items-center justify-center">
                  grafico
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaoGeral;
