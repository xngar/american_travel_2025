import Image from "next/image";
import React from "react";

const NOTFOUND = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center flex-col gap-4">
      <Image src="/nofound.png" alt="Not Found" width={400} height={400} />
      <h2 className="font-bold">
        Comunicar al mail: vcabrera@americantraveltour.cl
      </h2>
    </div>
  );
};

export default NOTFOUND;
