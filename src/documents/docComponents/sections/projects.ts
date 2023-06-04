import Project from "@/types/project";
import ProjectList from "../../../../public/dataset/projects.json";

const Projects = () => {
  return [
    ...ProjectList.map((project: Project) => {
      const end = project.description.indexOf(".") + 1;
      return [
        {
          text: project.title,
          style: {
            bold: true,
          },
        },
        {
          text: project.link,
          style: {
            italics: true,
            color: "#525252",
          },
        },
        { text: project.description.slice(0, end), margin: [0, 0, 0, 10] },
      ];
    }),
  ];
};

export default Projects;
