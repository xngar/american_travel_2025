import Image from "next/image";
import React from "react";

const Paquetes_destinos = () => {
  return (
    <div className="flex  justify-center">
      <div className="md:grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid grid-cols-1 justify-center gap-3">
        <div
          className="flex justify-center items-center bg-gradient-to-t
"
        >
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
        </div>
        <div className="flex justify-center ">
          <div className="w-[300px] h-[500px] p-5 relative ">
            <Image
              src="/paq_3.jpg"
              layout="fill"
              objectFit="cover"
              alt="chile"
              className="rounded-4xl  shadow-md"
            />
            <h2 className="botones-paquetes">Temporada Baja</h2>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-800 to-transparent z-10 rounded-4xl"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[300px] h-[500px] p-5 relative">
            <Image
              src="/paq_2.jpg"
              layout="fill"
              objectFit="cover"
              alt="chile"
              className="rounded-4xl  shadow-md"
            />
            <h2 className="botones-paquetes">Paquetes</h2>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-800 to-transparent z-10 rounded-4xl"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[300px] h-[500px] p-5 relative justify-center items-center">
            <Image
              src="/paq_1.jpg"
              layout="fill"
              objectFit="cover"
              alt="chile"
              className="rounded-4xl  shadow-md"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-800 to-transparent z-10 rounded-4xl"></div>
            <h2 className="botones-paquetes ">Ofertas</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paquetes_destinos;
