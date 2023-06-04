import CardFlip from "@/types/cards/cardFlip";
import { gsap } from "gsap";
import { MouseEvent, useLayoutEffect, useRef, useState } from "react";

export default function CardFlip({
  front,
  back,
  className,
  backClass,
  frontClass,
  rootClass,
}: CardFlip) {
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const frontSide = useRef<HTMLDivElement>(null);
  const backSide = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setTl(
      gsap
        .timeline({ paused: true })
        .to(frontSide.current, { duration: 1, rotationY: 180 })
        .to(backSide.current, { duration: 1, rotationY: 0 }, 0)
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
    <div id="mainWrap" className={"w-full " + rootClass}  onMouseEnter={play} onMouseLeave={reverse}>
      <div
        className={`float-left relative preserve-3d w-full lg:h-40" ${className ?? ''}`}
        ref={card}
      >
        <div className={`absolute face-hidden top-0 bottom-0 w-full left-0 right-0 ${frontClass ?? ''}`} ref={frontSide}>
          {front}
        </div>
        <div
          className={`absolute face-hidden -rotate-y-180 w-full ${backClass ?? ''}`}
          ref={backSide}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
