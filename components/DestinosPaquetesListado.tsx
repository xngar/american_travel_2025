import { Destiny } from "@/app/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  destino: Destiny;
  idArea: number | string;
}

const DestinoPaquetesListado = ({ destino, idArea }: Props) => {
  return (
    <Link
      href={`/listado/${idArea}/${destino.IdDestino}`}
      className="block shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl"
    >
      <div className="w-full bg-amber-400 rounded relative h-[300px] overflow-hidden">
        <Image
          src={destino.UrlImage || "/default.jpeg"}
          alt={destino.Nombre || "Imagen del destino"}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-amarillo-att to-transparent z-10" />

        <div className="absolute inset-0 flex items-end p-4 justify-center z-20">
          <h2 className="text-white font-bold text-xl text-center">
            <span className="text-white">{destino.Nombre}</span>
            <br />
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default DestinoPaquetesListado;
