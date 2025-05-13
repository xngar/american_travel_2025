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
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>¿Como de puedo comunicar?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Acordion;
