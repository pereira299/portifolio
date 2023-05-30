"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {  useState } from "react";

export default function Carousel({ children, qtd, onChange }: { children: React.ReactNode, qtd:number, onChange?: (page:number) => void }) {
  const itemWidth = 18;
  const perSlide = 3;
  const limit = qtd / 3 - 1; // 3 slides

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
    if(onChange) onChange(page - 1);
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
    if(onChange) onChange(page + 1);
  };
  return (
    <>
      <div className="my-0 mx-auto max-w-4xl overflow-hidden mt-40">
        <ul
          className="grid grid-flow-col transition-all duration-700 ease-in-out"
          style={{
            transform: transform,
          }}
        >
          {children}
        </ul>
      </div>
      <nav className="flex flex-row justify-between px-10 w-11/12 z-30 mt-52">
        <button
          className="text-sky-700 hover:text-white cursor-pointer mt-[-19rem] absolute disabled:text-gray-900"
          disabled={page == 0}
          onClick={() => prev()}
        >
          <ChevronLeftIcon size={60} />
        </button>
        <button
          className="text-sky-700 hover:text-white cursor-pointer mt-[-19rem] right-20 absolute disabled:text-gray-900"
          disabled={page == limit}
          onClick={() => next()}
        >
          <ChevronRightIcon size={60} />
        </button>
      </nav>
    </>
  );
}
