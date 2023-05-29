import Chip from "@/components/Chip";
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
  return (
    <article className="w-3/12 preserve-3d transition-all h-full hover:-rotate-y-180 duration-300 relative shadow">
      <div className="bg-gray-700 rounded-md p-3 h-fit w-full gap-y-2 grid face-hidden absolute -mt-20">
        <Image
          src={image}
          alt={`Site ${title}`}
          width={400}
          height={300}
          className="rounded-md w-full h-auto"
        />
        <h5 className="text-white font-bold text-md">{title}</h5>
        <p className="text-white text-sm">{description}</p>
      </div>
      <div className="face-hidden bg-gray-700 p-3 h-max w-full rounded-md rotate-y-180 absolute -mt-20">
        <h5 className="text-white font-bold text-md">{title}</h5>
        <p className="text-white text-sm">{description}</p>
        <div className="flex flex-row gap-x-2 mt-2 flex-wrap gap-y-2">
          {stack.map((item) => (
            <Chip key={item} text={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
