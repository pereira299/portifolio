'use client';
import Button from "../Button";
import { generatePdf } from "../../utils/pdf";

export default function Hero() {
  return (
    <div className="flex flex-col w-6/12 text-left gap-y-5">
      <p className="text-sm uppercase font-semibold font-oxanium-bold text-sky-500 -mb-5">
        desenvolvedor front-end
      </p>
      <h2 className="text-5xl font-oxanium-bold  text-white">Lucas Pereira</h2>
      <p className="text-xl font-lato w-9/12 font-thin text-white">
        Desenvolvedor front-end com foco em aplicações responsivas utilizando as
        tecnologias mais modernas no mercado, como ReactJS e NextJS.
      </p>
      <Button
        text="Baixar curriculo"
        variant="outlined"
        onClick={() => generatePdf()}
        className="w-8/12"
      />
    </div>
  );
}
