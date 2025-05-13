// components/Beneficio_info.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface BeneficioInfoProps {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const Beneficio_info: React.FC<BeneficioInfoProps> = ({
  icono,
  titulo,
  descripcion,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <motion.div whileHover={{ scale: 1.2, marginTop: -20 }}>
        {icono}
      </motion.div>{" "}
      {/* Renderiza el icono aquí */}
      <div className="flex flex-col justify-center items-center  gap-4">
        <h2 className="text-[28px] text-[#548c2f] text-center ">{titulo}</h2>
        <h3 className="text-[16px] text-[#003F88] text-justify ">
          {descripcion}
        </h3>
      </div>
    </div>
  );
};

export default Beneficio_info;
