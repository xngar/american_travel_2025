import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// import { MessageCircleQuestion } from "lucide-react";

const Acordion = () => {
  return (
    <div className="p-8 md:p-20">
      <div className="flex justify-center items-center gap-2">
        {/* <MessageCircleQuestion /> */}
        <h2 className="text-[40px] text-[#58167D]">Preguntas Frecuentes</h2>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            ¿Cómo reservo un paquete turístico?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            itaque mollitia aut voluptate, numquam eum, distinctio veritatis in
            quasi magni, accusamus labore amet possimus nihil accusantium? Ex
            eligendi quae ad.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>¿Qué medios de pago aceptan?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus pariatur eius consectetur quis fuga rerum, illum, iusto
            animi quidem quod officia doloremque quas necessitatibus dolores
            deleniti sint eos, dolorum iste.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Puedo cambiar la fecha de mi viaje?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus pariatur eius consectetur quis fuga rerum, illum, iusto
            animi quidem quod officia doloremque quas necessitatibus dolores
            deleniti sint eos, dolorum iste.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            ¿Qué pasa si quiero cancelar mi reserva?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus pariatur eius consectetur quis fuga rerum, illum, iusto
            animi quidem quod officia doloremque quas necessitatibus dolores
            deleniti sint eos, dolorum iste.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            ¿Los precios son por persona o por grupo?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus pariatur eius consectetur quis fuga rerum, illum, iusto
            animi quidem quod officia doloremque quas necessitatibus dolores
            deleniti sint eos, dolorum iste.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acordion;
