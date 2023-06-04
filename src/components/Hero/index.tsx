import PdfButton from "../Button/pdfButton";

export default function Hero() {
  return (
    <div className="flex flex-col w-9/12 lg:w-6/12 text-left gap-y-5 lg:mb-0">
      <p className="text-lg lg:text-sm uppercase w-fit font-semibold font-oxanium-bold text-sky-500 -mb-5">
        desenvolvedor front-end
      </p>
      <h2 className="text-5xl w-fit font-oxanium-bold  text-white">Lucas Pereira</h2>
      <p className="text-3xl lg:text-xl font-lato w-full lg:w-9/12 font-thin text-white">
        Desenvolvedor front-end com foco em aplicações responsivas utilizando as
        tecnologias mais modernas no mercado, como ReactJS e NextJS.
      </p>
      <PdfButton />
    </div>
  );
}
