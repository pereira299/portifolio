import Image from "next/image";
import Hero from "@/components/Hero";

export default function Welcome() {
  return (
    <section className="flex flex-row justify-between w-screen items-center p-20 bg-radial to-gray-800 from-sky-950/30">
      <Hero />
      <div className="flex flex-col items-center w-6/12">
        <Image src="images/coding.svg" alt="Coding" width={500} height={500} />
      </div>
    </section>
  );
}
