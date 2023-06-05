"use client";
import gsap from "gsap";
import Image from "next/image";
import { LegacyRef, MouseEvent, useLayoutEffect, useRef } from "react";

type SkillLevelProps = {
  skill: {
    name: string;
    icon: string;
    color: string;
    level: number;
  };
};

export default function SkillLevel({ skill }: SkillLevelProps) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      paused: true,
    });
  }, []);

  const play = (e: MouseEvent<HTMLLIElement>) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
      paused: true,
    }).play();
  };

  const reverse = (e: MouseEvent<HTMLLIElement>) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut",
      paused: true,
    }).play();
  };
  return (
    <li className="w-1/3 lg:w-72 px-5 lg:px-24 h-36 relative" onMouseEnter={play} onMouseLeave={reverse}>
      <div className="block">
        <Image
          src={`/images/icons/${skill.icon}.svg`}
          alt={skill.name}
          width={30}
          height={30}
          className="h-20 w-auto mx-auto mt-5"
        />
        <div className="w-full h-2 bg-gray-900 rounded-full mt-5">
          <div
            className={`h-full rounded-full z-30`}
            style={{
              width: `${skill.level}%`,
              backgroundColor: `${skill.color}`,
            }}
          ></div>
        </div>
      </div>
      <div
        ref={ref}
        className="absolute w-full lg:w-6/12 h-full top-7 lg:top-0 bottom-0 flex flex-col justify-center -ml-6 align-middle  bg-rhino-950/80 backdrop-blur-md rounded-2xl"
      >
        <div className="text-white text-center font-oxanium-bold text-xl lg:text-xl">
          {skill.name}
        </div>
      </div>
    </li>
  );
}
