import profileImg from "../../public/images/profile.jpg";
import peopleIcon from "../../public/images/icons/people.png";
import graduationIcon from "../../public/images/icons/graduation.png";
import workIcon from "../../public/images/icons/bag.png";
import languageIcon from "../../public/images/icons/language.png";
import skillsIcon from "../../public/images/icons/gear.png";
import contactIcon from "../../public/images/icons/phone.png";
import noprofitIcon from "../../public/images/icons/handshake.png";
import courseIcon from "../../public/images/icons/document.png";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import section from "./docComponents/section";
import { imageToBase64 } from "@/utils/image";
import About from "./docComponents/sections/about";
import Language from "./docComponents/sections/languages";
import Courses from "./docComponents/sections/courses";
import Work from "./docComponents/sections/work";
import Skills from "./docComponents/sections/skills";
import Projects from "./docComponents/sections/projects";
import Help from "./docComponents/sections/help";



const Curriculo = async (): Promise<TDocumentDefinitions> => {
  const images = {
    profileImg: await imageToBase64(profileImg),
    peopleIcon: await imageToBase64(peopleIcon),
    graduationIcon: await imageToBase64(graduationIcon),
    workIcon: await imageToBase64(workIcon),
    languageIcon: await imageToBase64(languageIcon),
    skillsIcon: await imageToBase64(skillsIcon),
    contactIcon: await imageToBase64(contactIcon),
    noprofitIcon: await imageToBase64(noprofitIcon),
    courseIcon: await imageToBase64(courseIcon),
  };

  
  return {
    content: [
      {
        columns: [
          {
            image: images.profileImg,
            width: 80,
            height: 80,
            alignment: "center",
          },
          {
            stack: [
              { text: "Lucas Pereira", style: "header" },
              { text: "DESENVOLVEDOR FRONT-END", style: "subheader" },
            ],
            alignment: "left",
          },
        ],
        columnGap: 25,
        margin: [0, 0, 0, 20],
      },
      {
        columns: [
          {
            stack: [
              ...section(images.peopleIcon, "Sobre", [...await About()]),
              ...section(images.languageIcon, "Idiomas", [...Language()]),
              ...section(images.skillsIcon, "Habilidades", [...Skills()]),
              ...section(images.courseIcon, "Projetos", [...Projects()]),
            ],
          },
          {
            stack: [
              ...section(images.graduationIcon, "Cursos e Formações", [...Courses()]),
              ...section(images.workIcon, "Experiência Profissional", [...Work()]),
              ...section(images.noprofitIcon, "Trabalho voluntario", [...Help()]),
            ],
          },
        ],
        columnGap: 25,
      },
    ],
    footer: function (currentPage: number, pageCount: number) {
      return {
        columns: [
          {
            text: "Curriculo - Lucas Pereira",
            alignment: "left",
            margin: [51, 0, 0, 0],
          },
          {
            text: `${currentPage.toString()} / ${pageCount}`,
            alignment: "right",
            margin: [0, 0, 51, 0],
          },
        ],
      };
    },
    styles: {
      header: {
        fontSize: 35,
        bold: true,
        alignment: "left",
        margin: [0, 0, 0, 5],
      },
      subheader: {
        fontSize: 14,
        alignment: "left",
        color: "#0369a1",
        margin: [0, 0, 0, 5],
      },
      sectionHeader: {
        fontSize: 16,
        alignment: "left",
        color: "#0369a1",
        margin: [0, 0, 0, 2],
        bold: true,
      },
    },
    pageMargins: [51, 31],
  };
};

export default Curriculo;