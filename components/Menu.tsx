"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import { Ship } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Headset } from "lucide-react";
import { Plane } from "lucide-react";
import { ResponseExchange } from "@/app/interfaces/interfaces";
import Link from "next/link";
// import { Exchange } from "@/app/api/Services";

const Menu = () => {
  const [cambio] = useState<ResponseExchange | undefined>({
    Id: 0,
    UserId: 0,
    CambioContado: 0,
    CambioCredito: 0,
    DateUp: "",
    FechaDesde: "",
    FechaHasta: "",
  });

  return (
    <div className="w-full  bg-[#003F88]/80 flex justify-between pl-8 items-center z-50 relative left-0  mt-0 h-[65px]">
      {/* menu mobile */}
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger className="text-white border-2 border-white p-3 ">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>

              <SheetDescription>
                <li className="animacion-botones">Home American</li>
                <li className="animacion-botones">Lujos</li>
                <li className="animacion-botones">Cruceros</li>
                <li className="animacion-botones">Contacto</li>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Image
        src="/gira.png"
        width={70}
        height={70}
        alt="logo"
        className=" md:hidden right-10 absolute"
      />
      {/* fin menu mobile */}
      <div className="lg:w-[200px]">
        <Image src="/gira.png" width={150} height={150} alt="logo" />
      </div>
      <div className="flex justify-around gap-[100px] ">
        <div className=" w-[600px] ">
          <ul className="hidden md:flex gap-3.5 justify-around text-white  ">
            <Link href="/">
              <li className="animacion-botones ">
                <span>
                  <Plane />
                </span>
                Home
              </li>
            </Link>

            <li className="animacion-botones">
              <span>
                <Sparkles />
              </span>
              Lujos
            </li>
            <li className="animacion-botones ">
              <span>
                <Ship />{" "}
              </span>
              Cruceros
            </li>
            <li className="animacion-botones">
              <span>
                <Headset />
              </span>
              Contacto
            </li>
          </ul>
        </div>
        {/* menu movil */}

        <div className="hidden md:flex items-center justify-baseline ">
          <p className="text-white pr-10 text-[14px] md:text-[12px] lg:text-[14px] ">
            Viernes, 02 de Mayo del 2025 / contado: {cambio?.CambioContado} -
            crédito: {cambio?.CambioCredito}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
