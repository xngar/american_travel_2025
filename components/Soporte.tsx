import Image from "next/image";
import React from "react";

const Soporte = () => {
  return (
    <div className=" relative w-full h-[150px] ">
      <Image
        src="/banner-soportejpg.jpg"
        layout="fill"
        objectFit="contain"
        alt="logo"
        className="pt-2"
      />
    </div>
  );
};

export default Soporte;
