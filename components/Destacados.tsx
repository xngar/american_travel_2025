"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Destinos_info from "./Destinos_info";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container grid grid-cols-3">
        <div className="embla__slide">
          <Destinos_info />
        </div>
        <div className="embla__slide">
          <Destinos_info />
        </div>
        <div className="embla__slide">
          <Destinos_info />
        </div>
      </div>
    </div>
  );
}
