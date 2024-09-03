"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import leftChevron from "../../../public/icons/left-chevron.png";
import { usePathname } from "next/navigation";

interface HeaderProps {
  titulo?: string;
  bg?: string;
}

const Header: React.FC<HeaderProps> = ({ titulo = "LOGO", bg = "white" }) => {
  const router = useRouter();
  const currentPath = usePathname();

  // Função para verificar se a URL atual contém a string especificada
  const isActive = (path: string) => currentPath.startsWith(path);

  // Função para determinar o texto e o link a partir do pathname
  const getLinkText = (path: string) => {
    switch (path) {
      case "/produtos":
        return "Produtos";
      case "/banner":
        return "Banner";
      case "/fluxo-pedidos":
        return "Fluxo de Pedidos";
      case "/controle-estoque":
        return "Controle de Estoque";
      case "/cupons":
        return "Cupons";
      default:
        return "";
    }
  };

  return (
    <div
      className={`bg-${bg} w-full py-4 px-4 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-start justify-between fixed top-0 z-40`}
    >
      <div className="flex items-center gap-4 sm:pt-8 sm:gap-6">
        <Image
          src={leftChevron}
          alt="Voltar"
          className="object-none cursor-pointer"
          onClick={() => router.push("/home")}
        />
        <Link href={"/home"}>
          <h1 className="font-bold text-3xl sm:text-5xl">{titulo}</h1>
        </Link>
      </div>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-semibold">
        {[
          "/banner",
          "/produtos",
          "/fluxo-pedidos",
          "/controle-estoque",
          "/cupons",
        ].map((path) => (
          <li
            key={path}
            className={isActive(path) ? "underline underline-offset-2" : ""}
          >
            <Link href={path}>{getLinkText(path)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
