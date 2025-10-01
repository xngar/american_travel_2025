"use client";
import { getAreas, getDestinos } from "@/app/api/Services";
import { Area, Destiny } from "@/app/interfaces/interfaces";
import DestinoPaquetesListado from "@/components/DestinosPaquetesListado";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Destinos = () => {
  const params = useParams<{ id: string }>(); // 👈 ya tipado
  const id = Number(params.id);

  const [destinos, setDestinos] = useState<Destiny[]>([]);
  const [areaName, setAreaName] = useState("Nuestros Destinos");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [destinosResponse, areasResponse] = await Promise.all([
        getDestinos(id),
        getAreas(),
      ]);

      if (destinosResponse.statusCode === 200) {
        setDestinos(destinosResponse.value.entities);
      }

      if (areasResponse.statusCode === 200) {
        const area = areasResponse.value.entities.find(
          (a: Area) => a.IdArea === id
        );
        if (area) setAreaName(area.Nombre);
      }

      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    // Limpieza del temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [id]);

  const SkeletonCard = () => (
    <div className="w-[100%] h-[300px] bg-gray-200 rounded-2xl animate-pulse p-4 flex flex-col justify-end">
      <div className="h-6 w-3/4 bg-gray-300 rounded" />
    </div>
  );

  return (
    <div>
      <div className="relative w-full h-[200px]">
        <Image src="/default.jpeg" alt="logo" fill className="object-cover" />
      </div>
      <h1 className="text-3xl font-bold text-purple-800 text-center mt-6">
        {areaName.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : destinos.map((destino) => (
              <DestinoPaquetesListado
                key={destino.IdDestino}
                destino={destino}
                idArea={id}
              />
            ))}
      </div>
    </div>
  );
};

export default Destinos;
