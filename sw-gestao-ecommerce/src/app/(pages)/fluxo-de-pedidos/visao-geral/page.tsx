import React from "react"
import HeaderFluxoDePedidos from "../../../components/HeaderFluxoDePedidos"
import FluxoDePedidosNav from "@/app/components/FluxoDePedidosNav"

function VisaoGeral() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <HeaderFluxoDePedidos></HeaderFluxoDePedidos>
      <FluxoDePedidosNav></FluxoDePedidosNav>
      <div className="pt-52">
        <div className="bg-gray-100 grid grid-cols-2 gap-12 px-20">
          <div className="border border-gray-300 bg-white h-60 rounded-xl"></div>
          <div className="bg-white h-60 rounded-xl"></div>
          <div className="bg-white h-60 rounded-xl"></div>
          <div className="bg-white h-60 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default VisaoGeral