import Image from "next/image";
import React from "react";

const Soporte = () => {
  return (
    <div className=" relative w-full h-[150px] -mb-2 border-b-2 border-gray-700">
      <a href="https://wa.me/56990895441" target="_blank" rel="noreferrer">
        <Image
          src="/banner-soportejpg.jpg"
          layout="fill"
          objectFit="contain"
          alt="logo"
          className=""
        />
      </a>
    </div>
  );
};

export default Soporte;
