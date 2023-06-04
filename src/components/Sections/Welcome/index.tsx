import Image from "next/image";
import Hero from "@/components/Hero";

export default function Welcome() {
  return (
    <section className="flex flex-col justify-around lg:flex-row lg:justify-between w-screen h-screen lg:h-auto items-center py-20 px-5 lg:px-20 bg-radial to-gray-800 from-sky-950/30">
      <Hero />
      <div className="flex flex-col items-center w-11/12 lg:w-6/12">
        <Image src="images/coding.svg" alt="Coding" width={500} height={500} />
      </div>
    </section>
  );
}
