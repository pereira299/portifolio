import Carousel from "@/components/Carousel";
import TitleSection from "@/components/TitleSection";
import SkillLevel from "@/components/SkillLevel";
import skillList from "../../../../public/dataset/skills.json";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-between w-screen bg-gray-800 py-32 px-10"
    >
      <TitleSection title="Habilidades" className="mx-auto" />
      <Carousel qtd={skillList.length}>
        {skillList.map((skill) => (
          <SkillLevel skill={skill} key={skill.name} />
        ))}
      </Carousel>
    </section>
  );
}