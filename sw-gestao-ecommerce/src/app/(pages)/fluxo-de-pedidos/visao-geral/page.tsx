import React from "react"
import HeaderFluxoDePedidos from "../../../components/HeaderFluxoDePedidos"
import FluxoDePedidosNav from "@/app/components/FluxoDePedidosNav"

function VisaoGeral() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <HeaderFluxoDePedidos></HeaderFluxoDePedidos>
      <FluxoDePedidosNav></FluxoDePedidosNav>
    </div>
  )
}

export default VisaoGeral