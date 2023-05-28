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
    <>
      <Image
        src={`/images/icons/${skill.icon}.svg`}
        alt={skill.name}
        width={30}
        height={30}
        className="h-20 w-auto mx-auto"
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
    </>
  );
}
