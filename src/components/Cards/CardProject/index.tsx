import Chip from "@/components/Chip";
import { Link } from "lucide-react";
import Image from "next/image";

interface CardProjectProps {
  project: {
    title: string;
    image: string;
    description: string;
    link: string;
    stack: string[];
  };
}

export default function CardProject(props: CardProjectProps) {
  const { title, image, description, link, stack } = props.project;
  const shortText = description.slice(0, 80) + " ...";
  return (
    <article className="w-3/12 preserve-3d transition-all h-full hover:-rotate-y-180 duration-300 relative shadow">
      <div className="bg-gray-700 rounded-md border-t-8 border-sky-500 p-3 h-fit w-full gap-y-2 grid face-hidden absolute -mt-20">
        <Image
          src={`/images/projects/${image}.png`}
          alt={`Site ${title}`}
          width={400}
          height={300}
          className="rounded-md w-full h-auto"
        />
        <h5 className="text-white font-bold text-md">{title}</h5>
        <p className="text-white text-sm">{shortText}</p>
      </div>
      <div className="face-hidden bg-gray-700 border-t-8 border-sky-500 p-3 h-max w-full rounded-md rotate-y-180 absolute -mt-20">
        <h5 className="text-white font-bold text-md">{title}</h5>
        <p className="text-white text-sm">{description}</p>
        <div className="flex flex-row gap-x-2 mt-2 flex-wrap gap-y-2">
          {stack.map((item) => (
            <Chip key={item} text={item} />
          ))}
        </div>
        <Link
          href={link}
          className="border-sky-600 border-2 w-full rounded-md px-2 py-1 mt-2 hover:border-white hover:text-white"
        >
          <p className="text-sky-600">Acessar o site</p>
        </Link>
      </div>
    </article>
  );
}
