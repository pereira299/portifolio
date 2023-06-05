import Chip from "@/components/Chip";
import Image from "next/image";
import Link from "next/link";
import CardFlip from "../CardFlip";
import CardProject from "@/types/cards/cardProject";


export default function CardProject({ project }: CardProject) {
  return (
    <article
      key={project.title}
      className="flex flex-col w-full lg:w-[32%] lg:h-[22rem] justify-between mb-10"
    >
      <CardFlip
        front={
          <Image
            src={`/images/projects/${project.image}.png`}
            alt={project.title}
            width={300}
            height={200}
            className="rounded-md w-full h-auto mb-2"
          />
        }
        back={
          <>
            {project.stack.map((item) => (
              <Chip key={item} text={item} />
            ))}
          </>
        }
        className="h-32 lg:h-40"
        backClass="flex flex-row flex-wrap gap-y-1 items-center justify-around gap-x-2 bg-gray-900 px-1.5 lg:px-2 py-2 rounded-lg h-32 lg:h-[9.5rem]"
      />
      <div className="w-full mb-auto mt-4">
        <h3 className="text-white font-bold text-xl lg:text-md">{project.title}</h3>
        <time dateTime={project.date} className="text-gray-500 text-2xl lg:text-sm">
          {Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "short",
          })
            .format(new Date(project.date || "2023-05-01"))
            .replace(" de", "")}
        </time>
        <p className="text-white text-lg lg:text-sm">{project.description}</p>
      </div>
      <Link
        href={project.link}
        className="border-sky-600 flex mt-2 border-2 w-full rounded-md px-2 py-1 hover:border-white hover:text-white text-sky-600"
      >
        <p className=" text-center w-full font-semibold">
          Acessar {project.title}
        </p>
      </Link>
    </article>
  );
}
