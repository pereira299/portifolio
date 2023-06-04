const Work = () => {
  const workList = [
    {
      title: "Desenvolvedor Front-end",
      company: "Helte Solar",
      description:
        "Desenvolvimento e manutenção de recursos para a plataforma de venda de kits fotovoltaicos, utilizando Vue.js, Vuex, Vue Router, Axios, HTML, CSS, Javascript, Git e Github.",
    },
  ];
  return [
    ...workList.map((work) => {
      const end = work.description.indexOf(".") + 1;
      return [
        {
          text: work.title,
          style: {
            bold: true,
          },
        },
        {
          text: work.company,
          style: {
            italics: true,
          },
        },
        { text: work.description, margin: [0, 0, 0, 50],},
    ];
    }),
  ];
};

export default Work;
