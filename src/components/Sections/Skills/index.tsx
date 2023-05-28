"use client";
import SkillLevel from "@/components/SkillLevel";
import TitleSection from "@/components/TitleSection";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import skillList from "../../../../public/skills.json";

export default function Skills() {
  const itemWidth = 18;
  const perSlide = 3;
  const limit = skillList.length / 3 - 1; // 3 slides

  // numberOfGap = slide - 1 (i.e 2 slides has 1 gap between them)

  const [transform, setTransform] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const prev = () => {
    console.log(page);
    if (page === 0) {
      return;
    }
    const pageSize = itemWidth * perSlide;
    const transformX = pageSize * (page - 1);
    setTransform(`translateX(${-transformX}rem)`);
    setPage(page - 1);
  };
  const next = () => {
    console.log(page);
    if (page === limit) {
      return;
    }

    const pageSize = itemWidth * perSlide;
    const transformX = pageSize * (page + 1);
    setTransform(`translateX(${-transformX}rem)`);
    setPage(page + 1);
  };

  return (
    <section
      id="skills"
      className="flex flex-col justify-between w-screen h-section bg-gray-800 py-32 px-10"
    >
      <TitleSection title="Habilidades" className="mx-auto" />
      <div className="my-0 mx-auto max-w-4xl overflow-hidden">
        <ul
          className="grid grid-flow-col transition-all duration-200 ease-in-out"
          style={{
            transform: transform,
          }}
        >
          {skillList.map((skill) => (
            <li key={skill.name} className="w-72 px-24">
              <SkillLevel skill={skill} />
            </li>
          ))}
        </ul>
      </div>
      <nav className="flex flex-row justify-between px-10 absolute w-11/12 mt-52">
        <button
          className="text-sky-700 hover:text-white cursor-pointer disabled:text-gray-900"
          disabled={page == 0}
          onClick={() => prev()}
        >
          <ChevronLeftIcon size={60} />
        </button>
        <button
          className="text-sky-700 hover:text-white cursor-pointer disabled:text-gray-900"
          disabled={page == limit}
          onClick={() => next()}
        >
          <ChevronRightIcon size={60} />
        </button>
      </nav>
    </section>
  );
}
