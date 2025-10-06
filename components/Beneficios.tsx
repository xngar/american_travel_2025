// components/Beneficios.tsx
import React from "react";
import Beneficio_info from "./Beneficio_info";
import { ShieldCheck } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const Beneficios = () => {
  return (
    <div className=" bg-white  p-8 md:pl-30 md:pr-30 gap-10 md:grid md:grid-cols-2 grid grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 ">
      <Beneficio_info
        icono={<ThumbsUp size={70} color="#E0A800" aria-label="garantia" />}
        titulo="Más que un Viaje, una Experiencia"
        descripcion="Contamos con una amplia selección de hoteles premiados y reconocidos a nivel mundial reconocidos a.reconocidos a nivel mundial. ."
      />
      <Beneficio_info
        icono={
          <CircleDollarSign size={70} color="#E0A800" aria-label="beneficios" />
        }
        titulo="Asistencia permanente"
        descripcion="Brindamos asistencia completa en cada etapa de tu viaje, con atención personalizada y soporte a través de nuestras plataformas digitales."
      />
      <Beneficio_info
        icono={
          <MousePointerClick size={70} color="#E0A800" aria-label="pagos" />
        }
        titulo="Forma parte de una familia"
        descripcion="Queremos que te sientas parte de nuestra familia, por eso cuidamos de ti y de quienes viajan contigo, como debe ser."
      />
      <Beneficio_info
        icono={<ShieldCheck size={70} color="#E0A800" aria-label="seguridad" />}
        titulo="Paga cuando estés informado"
        descripcion="Antes de tu pago, te entregamos toda la información necesaria a través de nuestros ejecutivos, porque viajar informado es viajar tranquilo."
      />
    </div>
  );
};

export default Beneficios;
