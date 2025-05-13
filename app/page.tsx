import Beneficios from "@/components/Beneficios";

import Destinos from "@/components/Destinos";
import EmblaCarousel from "@/components/EmblaCarousel";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";

import { EmblaOptionsType } from "embla-carousel";

import Slider from "@/components/Slider";
import Acordion from "@/components/Acordion";
const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="">
      <Slider />

      <h2 className="flex justify-center items-center text-[50px] text-[#00296B] pt-8 pb-8">
        ¿ Porque Viajar con American Travel Tour 2?
      </h2>
      <Beneficios />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Destinos />
      <Acordion />
      <Formulario />
      <Footer />
    </div>
  );
}
