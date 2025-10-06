"use client";
import { getAreas } from "@/app/api/Services";
import { Area } from "@/app/interfaces/interfaces";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Paquetes_destinos = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        setLoading(true);
        const response = await getAreas();
        if (response.statusCode === 200) {
          setAreas(response.value.entities);
        }
      } catch (error) {
        console.error("Error al cargar las áreas:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchAreas();
    }, 1000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  const SkeletonCard = () => (
    <div className="w-[300px] h-[300px] bg-gray-200 rounded-2xl animate-pulse p-4 flex flex-col justify-end">
      <div className="h-6 w-3/4 bg-gray-300 rounded" />
    </div>
  );

  return (
    <div className="flex  justify-center">
      <div className="md:grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid grid-cols-1 justify-center gap-3">
        {/* AREAS */}
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : areas.map((area: Area) => (
              <Link href={`/destinos/${area.IdArea}`} key={area.IdArea}>
                <div className="flex justify-center items-center bg-gradient-to-t">
                  <div className="w-[300px] h-[500px] p-5 relative ">
                    <Image
                      src={area.UrlImage || "/chile.jpg"}
                      layout="fill"
                      objectFit="cover"
                      alt="chile"
                      className="rounded-4xl  shadow-md"
                    />
                    <h2 className="botones-paquetes">{area.Nombre}</h2>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gris-claro to-transparent z-10 rounded-4xl"></div>
                  </div>
                </div>
              </Link>
            ))}

        {/* <div className="flex justify-center items-center bg-gradient-to-t">
          <div className="w-[300px] h-[500px] p-5 relative ">
            <Image
              src="/paq_4.jpg"
              layout="fill"
              objectFit="cover"
              alt="chile"
              className="rounded-4xl  shadow-md"
            />
            <h2 className="botones-paquetes">Verano 2025</h2>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-800 to-transparent z-10 rounded-4xl"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Paquetes_destinos;
