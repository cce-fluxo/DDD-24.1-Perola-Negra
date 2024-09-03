import React from "react";
import HeaderFluxoDePedidos from "../../../components/HeaderFluxoDePedidos";
import FluxoDePedidosNav from "@/app/components/FluxoDePedidosNav";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile/HeaderMobile";
function PedidosEntregues() {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <HeaderMobile titulo="PEDIDOS"></HeaderMobile>
      {/**Header de dispositivos mobile + md */}

      <div className="hidden lg:flex lg:justify-center w-full h-[18vh] overflow-hidden xl:h-[11vh]">
        {/**Header para dispositivos lg*/}
        <Header titulo="FLUXO DE PEDIDOS" bg="transparent"></Header>
      </div>
      <FluxoDePedidosNav></FluxoDePedidosNav>
      <div className="pt-36">
        <div className="bg-gray-100 grid grid-cols-5 px-20">
          <div className="bg-gray-300 h-12 text-white rounded-tl-lg flex items-center justify-center text-lg">
            Pedido
          </div>
          <div className="bg-gray-300 h-12 text-white flex items-center justify-center text-lg">
            Código
          </div>
          <div className="bg-gray-300 h-12 text-white flex items-center justify-center text-lg">
            Status
          </div>
          <div className="bg-gray-300 h-12 text-white flex items-center justify-center text-lg">
            Endereço
          </div>
          <div className="bg-gray-300 h-12 text-white rounded-tr-lg flex items-center justify-center text-lg">
            Data de entrega
          </div>
          <div className="border-t border-b border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            texto
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            #123456789
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            Entregue no prazo
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl px-6">
            Rua Tananan n 666 Rio de Janeiro - RJ
          </div>
          <div className="border-t border-b border-l border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            23/03/2023
          </div>
          <div className="border-t border-b border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            texto
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            #123456789
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            Entregue com atraso
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl px-6">
            Rua Tananan n 666 Rio de Janeiro - RJ
          </div>
          <div className="border-t border-b border-l border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            23/03/2023
          </div>
          <div className="border-t border-b border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            texto
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            #123456789
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            Entregue com atraso
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl px-6">
            Rua Tananan n 666 Rio de Janeiro - RJ
          </div>
          <div className="border-t border-b border-l border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            23/03/2023
          </div>
          <div className="border-t border-b border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            texto
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            #123456789
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            Entregue no prazo
          </div>
          <div className="border border-gray-300 bg-white h-24 flex items-center justify-center text-2xl px-6">
            Rua Tananan n 666 Rio de Janeiro - RJ
          </div>
          <div className="border-t border-b border-l border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            18/03/2023
          </div>
          <div className="border-t border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            texto
          </div>
          <div className="border-t border-l border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            #123456789
          </div>
          <div className="border-t border-l border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            Entregue no prazo
          </div>
          <div className="border-t border-l border-r border-gray-300 bg-white h-24 flex items-center justify-center text-2xl px-6">
            Rua Tananan n 666 Rio de Janeiro - RJ
          </div>
          <div className="border-t border-l border-gray-300 bg-white h-24 flex items-center justify-center text-2xl">
            18/03/2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default PedidosEntregues;
