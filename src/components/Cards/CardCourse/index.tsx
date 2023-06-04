import Course from "@/types/course";
import Button from "@/components/Button";
import Image from "next/image";
import { useMemo } from "react";

export default function CardCourse(props: Course) {
  const { period, title, description, image } = props;

  const summary = useMemo(() => {
    if (!description) return "Curso de " + title;
    
    const words = description.split(" ");
    const count = description.slice(0, 85).split(" ").length;
    const summary = words.slice(0, count-1).join(" ");

    return summary + "...";
  }, [description, title]);

  const date = useMemo(() => {
    if (!period) return "Atualmente";

    const start = new Date(period.start);
    const end = new Date(period.end);

    if (start.getDate() === end.getDate()) {
      return Intl.DateTimeFormat("pt-BR", {
        month: "short",
        year: "numeric",
      })
        .format(new Date(period.start))
        .replace(". de ", "/");
    } else if (end.getDate() > new Date().getDate()) {
      return "Atualmente";
    } else {
      return `${Intl.DateTimeFormat("pt-BR", {
        month: "short",
        year: "numeric",
      })
        .format(new Date(period.start))
        .replace(". de ", "/")} - ${Intl.DateTimeFormat("pt-BR", {
        month: "short",
        year: "numeric",
      })
        .format(new Date(period.end))
        .replace(". de ", "/")}`;
    }
  }, [period]);

  return (
    <article className="flex flex-col gap-y-2 w-full lg:w-[33%] rounded-2xl transition-colors duration-300 hover:bg-gray-900 p-4">
      <div className="flex flex-row justify-between">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className="w-3/12 lg:w-2/12 rounded-xl"
        />
        <h4 className="w-8/12 lg:w-9/12 text-white font-bold my-auto font-lato-bold text-3xl lg:text-xl">
          {title}
        </h4>
      </div>
      <div>
        <time
          dateTime={period?.start || new Date().toISOString()}
          className="text-2xl lg:text-sm text-gray-500 uppercase"
        >
          {date}
        </time>
        <p className="text-gray-200 text-2xl lg:text-md font-lato mb-0">{summary}</p>
        <Button  text="Ver mais" className="mt-2 w-full" onClick={props.readMore} variant="outlined"/>
      </div>
    </article>
  );
}
