import Image from "next/image";
import React from "react";
import Menu from "./Menu";

const Slider = () => {
  return (
    <div className="h-[500px] pt-3 relative">
      <Menu />
      <Image
        src="/jovenes_2.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Slider;
