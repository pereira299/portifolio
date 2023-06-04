import { imageToBase64 } from "@/utils/image";
import phoneIcon from "../../../../public/images/icons/phone.png";
import emailIcon from "../../../../public/images/icons/email.png";
import siteIcon from "../../../../public/images/icons/site.png";
import addressIcon from "../../../../public/images/icons/map.png";
import Info from "../Info";

const About = async () => {
  const topics = [
    {
      title: "45 9 9952-8508",
      icon: await imageToBase64(phoneIcon),
    },
    {
      title: "lucasper057@gmail.com",
      icon: await imageToBase64(emailIcon),
    },
    {
      title: "https://pereira299.vercel.app",
      icon: await imageToBase64(siteIcon),
    },
    {
      title: "Toledo - PR",
      icon: await imageToBase64(addressIcon),
    },
  ];

  return [
    {
      text: `Olá, meu nome é Lucas Pereira, tenho 23 anos. Comecei a me interessar pela área de tecnologia da informação aos 15 anos e atualmente sou desenvolvedor front-end a mais de 2 anos.`,
    },
    {
      table: {
        widths: ["auto", "95%"],
        body: [
          ...topics.map((topic) =>
            Info({
              image: topic.icon,
              text: topic.title,
            })
          ),
        ],
      },
      margin: [10, 5, 10,0],
      layout: "noBorders",
    },
  ];
};

export default About;
