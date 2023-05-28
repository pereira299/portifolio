import Image from "next/image";

export default function Welcome() {
  return (
    <section className="flex flex-row justify-between w-screen items-center p-20 bg-radial to-gray-800 from-sky-950/30">
      <div className="flex flex-col w-6/12 text-left gap-y-2">
        <p className="text-sm uppercase font-semibold font-oxanium-bold text-sky-500">
          desenvolvedor front-end
        </p>
        <h2 className="text-5xl font-oxanium-bold  text-white">
          Lucas Pereira
        </h2>
        <p className="text-xl font-lato w-9/12 font-thin text-white">
          Desenvolvedor front-end com foco em aplicações responsivas utilizando
          as tecnologias mais modernas no mercado, como ReactJS e NextJS.
        </p>
      </div>
      <div className="flex flex-col items-center w-6/12">
        <Image src="images/coding.svg" alt="Coding" width={500} height={500} />
      </div>
    </section>
  );
}
