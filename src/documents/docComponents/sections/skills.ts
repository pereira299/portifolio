import Skill from "@/types/skill";
import skillList from "../../../../public/dataset/skills.json";

const Skills = () => {
  return [
    {
      ul: skillList.slice(0,-2).map((skill: Skill) => {
        let level;
        if (skill.level > 75) level = "Avançado";
        else if (skill.level >= 50) level = "Intermediário";
        else level = "Básico";

        return {
          columns: [
            {
              width: "37%",
              text: skill.name,
              style: { bold: true },
            },
            {
              text: level,
            },
          ],

          margin: [0, 0, 0, 10],
        };
      }),
      margin: [10, 0, 0, 20],
    },
  ];
};

export default Skills;
