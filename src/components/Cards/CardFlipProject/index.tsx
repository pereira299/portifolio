import Chip from "@/components/Chip";
import Image from "next/image";
import Link from "next/link";
import CardFlip from "../CardFlip";
import Project from "@/types/project";
import CardProject from "@/types/cards/cardProject";


function FrontCard(props: {
  project: { title: string; image: string; shortText: string };
}) {
  const { title, image, shortText } = props.project;
  return (
    <>
      <Image
        src={`/images/projects/${image}.png`}
        alt={`Site ${title}`}
        width={400}
        height={300}
        className="rounded-md w-full h-auto"
      />
      <h5 className="text-white font-bold text-3xl md:text-4xl lg:text-md mt-5 mb-3">{title}</h5>
      <p className="text-white text-2xl md:text-3xl lg:text-sm">{shortText}</p>
    </>
  );
}
function BackCard({
  project,
}: {
  project: {
    description: string;
    stack: string[];
    link: string;
    title: string;
  };
}) {
  const { title, description, link, stack } = project;
  return (
    <>
      <h5 className="text-white font-bold text-md">{title}</h5>
      <p className="text-white text-sm">{description}</p>
      <div className="flex flex-row gap-x-2 mt-2 flex-wrap gap-y-2">
        {stack.map((item) => (
          <Chip key={item} text={item} />
        ))}
      </div>
      <Link
        href={link}
        className="border-sky-600 flex border-2 w-full rounded-md px-2 py-1 hover:border-white hover:text-white text-sky-600"
      >
        <p className="text-xl lg:text-md text-center w-full font-semibold">Acessar o site</p>
      </Link>
    </>
  );
}

export default function CardProject(props: CardProject) {
  const { description} = props.project;
  const count = description.split(" ").reduce((acc, item) => {
    if (acc < 90) {
      acc += item.length + 1;
    }
    return acc;
  }, 0);
  const shortText = description.slice(0, count) + "...";

  return (
    <>
      <CardFlip
        front={
          <FrontCard
            project={{
              ...props.project,
              shortText,
            }}
          />
        }
        back={<BackCard project={props.project} />}
        className="w-64 h-96 md:h-[32rem] lg:h-80 mr-3 mb-5 lg:mb-0"
        rootClass="mb-10 lg:mb-0"
        frontClass="rounded-lg w-full h-full bg-gray-700 before:h-2 before:w-[95%] before:bg-sky-500 before:-mt-5 before:mb-5 before:flex before:mx-auto before:rounded-t-lg p-3"
        backClass="rounded-lg w-full flex flex-col justify-between h-full bg-gray-700 before:h-2 before:w-[95%] before:bg-sky-500 before:-mt-5 before:mx-auto before:rounded-t-lg p-3"
      />
    </>
  );
}
