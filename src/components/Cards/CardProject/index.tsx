"use client";
import Chip from "@/components/Chip";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useLayoutEffect, useRef, useState } from "react";

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
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const { title, image, description, link, stack } = props.project;
  const front = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const count = description.split(" ").reduce((acc, item) => {
    if (acc < 90) {
      acc += item.length + 1;
    }
    return acc;
  }, 0);
  const shortText = description.slice(0, count) + "...";

  useLayoutEffect(() => {
    setTl(
      gsap
        .timeline({ paused: true })
        .to(front.current, { duration: 1, rotationY: 180 })
        .to(back.current, { duration: 1, rotationY: 0 }, 0)
        .to(card.current, { z: 50 }, 0)
        .to(card.current, { z: 0 }, 0.5)
    );
  }, []);

  const play = (e: MouseEvent<HTMLDivElement>) => {
    if (tl) tl.play();
  };

  const reverse = (e: MouseEvent<HTMLDivElement>) => {
    if (tl) tl.reverse();
  };
  return (
    <>
      <div id="mainWrap" onMouseEnter={play} onMouseLeave={reverse}>
        <div
          className="w-72 h-80 float-left mr-3 relative preserve-3d"
          ref={card}
        >
          <div
            className="rounded-lg absolute w-full h-full bg-gray-700 border-t-8 border-sky-500 p-3 face-hidden"
            ref={front}
          >
            <Image
              src={`/images/projects/${image}.png`}
              alt={`Site ${title}`}
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <h5 className="text-white font-bold text-md mt-5 mb-3">{title}</h5>
            <p className="text-white text-sm">{shortText}</p>
          </div>
          <div
            className="rounded-lg absolute w-full flex flex-col justify-between h-full bg-gray-700 border-t-8 border-sky-500 p-3 face-hidden -rotate-y-180"
            ref={back}
          >
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
              <p className=" text-center w-full font-semibold">
                Acessar o site
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
