import Image from "next/image";

type SkillLevelProps = {
  skill: {
    name: string;
    icon: string;
    color: string;
    level: number;
  };
};

export default function SkillLevel({ skill }: SkillLevelProps) {
  return (
    <li className="w-72 px-24 h-36 relative">
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
      <div className="absolute overlay w-6/12 h-full top-0 bottom-0 flex flex-col justify-center  duration-300 -ml-6 align-middle  bg-rhino-950/80 backdrop-blur-md rounded-2xl">
        <div className="text-white text-center font-oxanium-bold text-xl">
          {skill.name}
        </div>
      </div>
    </li>
  );
}
