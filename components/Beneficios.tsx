// components/Beneficios.tsx
import React from "react";
import Beneficio_info from "./Beneficio_info";
import { ShieldCheck } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const Beneficios: React.FC = () => {
  return (
    <div className=" bg-white  p-10 md:pl-30 md:pr-30 gap-10 md:flex-col lg:flex-row sm:flex-col flex-row lg:flex  ">
      <Beneficio_info
        icono={<ThumbsUp size={100} color="#58167D" aria-label="garantia" />}
        titulo="¿Porque Viajar con nosotros?"
        descripcion="Te ofrecemos una variada gama de hoteles que han sido reconocidos y premiados, a lo largo del todo el mundo."
      />
      <Beneficio_info
        icono={
          <CircleDollarSign
            size={100}
            color="#58167D"
            aria-label="beneficios"
          />
        }
        titulo="Asistencia permanente"
        descripcion="Te ofrecemos una asistencia integral antes, durante y después de tu viaje, por medio de ejecutivos personalizados y a través de nuestras plataformas tecnológicas."
      />
      <Beneficio_info
        icono={
          <MousePointerClick size={100} color="#58167D" aria-label="pagos" />
        }
        titulo="Forma parte de una familia"
        descripcion="Porque queremos que no seas un cliente más, sino un integrante más de nuestra familia, nos preocupamos de ti y de quienes te acompañan, como debe ser."
      />
      <Beneficio_info
        icono={
          <ShieldCheck size={100} color="#58167D" aria-label="seguridad" />
        }
        titulo="Paga cuando estés informado"
        descripcion="Antes de pagar, nos preocupamos de entregarte toda la información que necesitas, antes del viaje, a través de nuestros ejecutivos. Porque viajar informado también es viajar tranquilo."
      />
    </div>
  );
};

export default Beneficios;
