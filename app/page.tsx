import Beneficios from "@/components/Beneficios";

import EmblaCarousel from "@/components/EmblaCarousel";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";

import { EmblaOptionsType } from "embla-carousel";

import Slider from "@/components/Slider";
import Acordion from "@/components/Acordion";
import Paquetes_destinos from "@/components/Paquetes_destinos";
import Menu from "@/components/Menu";
import Soporte from "@/components/Soporte";

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="">
      {/* <Menu /> */}
      <Slider />

      <h2 className="flex justify-center items-center text-[50px] font-bold pt-8 pb-8 pl-5 pr-5 leading-tight">
        <span className="bg-gradient-to-r from-[#00296B] to-[#d526db] bg-clip-text text-transparent">
          ¿ Porque Viajar con American Travel Tour?
        </span>
      </h2>
      <Beneficios />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Paquetes_destinos />
      <Acordion />
      <Soporte />

      <Formulario />
      {/* <Footer /> */}
    </div>
  );
}
