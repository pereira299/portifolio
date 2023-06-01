import Course from "@/types/course";
import Image from "next/image";
import { useMemo } from "react";

export default function CardCourse(props: Course) {
  const { period, title, description, image } = props;

  const summary = useMemo(() => {
    if (!description) return "Curso de " + title;

    const words = description.split(" ");
    const summary = words.slice(0, 20).join(" ");

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
    <article className="flex flex-col gap-y-2 w-[48%]">
      <div className="flex flex-row justify-between">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className="w-4/12 rounded-2xl"
        />
        <h4 className="w-7/12 text-white font-bold my-auto font-lato-bold text-xl">
          {title}
        </h4>
      </div>
      <div>
        <time
          dateTime={period?.start || new Date().toISOString()}
          className="text-sm text-gray-500 uppercase"
        >
          {date}
        </time>
        <p className="text-gray-200 text-md font-lato">{summary}</p>
      </div>
    </article>
  );
}
