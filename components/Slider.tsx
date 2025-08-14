import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="h-[500px]  relative">
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
