import Image from "next/image";
import TitleSection from "../../TitleSection";
import SocialLinks from "../../SocialLinks";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-between w-screen bg-[#2a3545]"
    >
      <div className="absolute -mt-14 w-screen">
        <Image
          src="/images/blocks.svg"
          alt="blocks"
          width={1366}
          height={150}
          className="w-full"
        />
      </div>
      <div className="h-[95vh] py-20 px-10 flex flex-row items-center justify-between mt-5">
        <article className="w-1/2 flex flex-col items-center">
          <Image
            src="/images/profile.jpg"
            alt="foto de perfil de Lucas Pereira"
            width={500}
            height={500}
            className="rounded-full p-2 border-[6px] border-sky-700 w-4/12 mx-auto"
          />
          <h4 className="mt-5 mb-2 text-white text-3xl font-oxanium">Lucas Pereira</h4>
          <SocialLinks />
        </article>
        <article className="w-1/2">
          <TitleSection title="Sobre" />
          <h3 className="font-bold text-white text-md mt-20 mb-5">
            Conheça um pouco sobre mim
          </h3>
          <p className="text-md w-9/12 font-thin text-white mb-2">
            Olá, meu nome é Lucas Pereira, tenho 23 anos. Comecei a me
            interessar pela área de tecnologia da informação aos 15 anos e
            atualmente sou desenvolvedor front-end a mais de 2 anos.
          </p>
          <p className="text-md w-9/12 font-thin text-white">
            Estou cursando o 5º período de Sistemas para Internet na
            Universidade Tecnológica Federal do Paraná (UTFPR) e possuo
            experiencias profissionais na área de desenvolvimento web.
          </p>
        </article>
      </div>
      <div className="-mb-14 w-screen">
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