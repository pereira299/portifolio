"use client";
import Image from "next/image";
import TitleSection from "../../TitleSection";
import SocialLinks from "../../SocialLinks";
import { useState, useEffect } from "react";

export default function About() {
  const [age, setAge] = useState(0);

  // Calculate age on client-side when component mounts
  useEffect(() => {
    const birthDate = new Date("1999-04-29");
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    // Adjust age if birthday hasn’t occurred this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);
  return (
    <section
      id="about"
      className="flex flex-col justify-between w-screen bg-[#2a3545]"
    >
      <div className="absolute -mt-7 lg:-mt-14 w-screen">
        <Image
          src="/images/blocks.svg"
          alt="blocks"
          width={1366}
          height={150}
          className="w-full"
        />
      </div>
      <div className="lg:h-[95vh] py-20 px-10 flex flex-col lg:flex-row items-center justify-between mt-5">
        <article className="w-full lg:w-1/2 flex flex-col items-center mb-10 lg:mb-0">
          <Image
            src="/images/profile.jpg"
            alt="foto de perfil de Lucas Pereira"
            width={500}
            height={500}
            className="rounded-full p-2 border-[6px] border-sky-700 w-9/12 lg:w-4/12 mx-auto"
          />
          <h4 className="mt-5 mb-2 text-white text-3xl lg:text-3xl font-oxanium">Lucas Pereira</h4>
          <SocialLinks />
        </article>
        <article className="w-full lg:w-1/2">
          <TitleSection title="Sobre" className="ml-5 lg:ml-0"/>
          <h3 className="font-bold text-white text-2xl lg:text-md mt-20 mb-5">
            Conheça um pouco sobre mim
          </h3>
          <p className="text-xl lg:text-md w-full lg:w-9/12 font-thin text-white mb-2">
            Olá, meu nome é Lucas Pereira, tenho {age} anos. Comecei a me
            interessar pela área de tecnologia da informação aos 15 anos e
            atualmente sou desenvolvedor front-end a mais de 2 anos.
          </p>
          <p className="text-xl lg:text-md w-full lg:w-9/12 font-thin text-white">
            Estou cursando o 6º período de Sistemas para Internet na
            Universidade Tecnológica Federal do Paraná (UTFPR) e possuo
            experiencias profissionais na área de desenvolvimento web.
          </p>
        </article>
      </div>
      <div className="-mb-7 lg:-mb-14 w-screen">
        <Image
          src="/images/blocks.svg"
          alt="blocks"
          width={1366}
          height={150}
          className="w-full rotate-180"
        />
      </div>
    </section>
  );
}
