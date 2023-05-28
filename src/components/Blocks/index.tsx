"use client";
import { useEffect, useMemo, useState } from "react";

type BlockType = {
  id: number;
  x: number;
  y: number;
  color: string;
};

export default function Blocks({ invert }: { invert?: boolean }) {
  const blocks: BlockType[] = useMemo(() => {
    return Array.from({ length: 27 }, (_, i) => {
      // random number between 0 and 2
      const random = parseInt(Math.floor(Math.random() * 60).toString());
      const positions = [0, 25, 50];

      return {
        id: i,
        x: i * 50,
        y: positions[random % 3],
        color:
          random === 3 || random === 4 ? "fill-[#2a3545]" : "fill-[#222f3e]",
      };
    });
  }, []);

  return (
    <svg className="w-full transition-all duration-500">
      <g>
        {blocks.map((block) => (
          <rect
            key={block.id}
            width="50"
            height="75"
            x={block.x}
            y={block.y}
            className={invert ? 'fill-[#2a3545]' : block.color}
          />
        ))}
      </g>
      <g>
        {blocks.map((block) => (
          <rect
            key={block.id}
            width="50"
            height="75"
            x={block.x}
            y={block.y + 50}
            className={invert ? block.color : 'fill-[#2a3545]'}
          />
        ))}
      </g>
    </svg>
  );
}
