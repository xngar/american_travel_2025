import Beneficios from "@/components/Beneficios";
import Destinos from "@/components/Destinos";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";

import Slider from "@/components/Slider";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="">
      <Slider />
      {/* <Video /> */}
      <h2 className="flex justify-center items-center text-[50px] text-[#58167D]">
        ¿ Porque Viajar con American Travel Tour ?
      </h2>
      <Beneficios />
      <Destinos />
      <Formulario />
      <Footer />
    </div>
  );
}
