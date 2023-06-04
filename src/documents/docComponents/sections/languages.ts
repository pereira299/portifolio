const Language = () => {
  const idiomas = [
    {
      language: "Português",
      level: "Nativo",
    },
    {
      language: "Inglês",
      level: "Intermediário",
    },
    {
      language: "Espanhol",
      level: "Básico",
    },
  ];

  return [
    {
      ul: idiomas.map((idioma) => {
        return {
          columns: [
            {
              width: "30%",
              text: idioma.language,
              style: { bold: true },
            },
            idioma.level,
          ],

          margin: [0, 0, 0, 10],
        };
      }),
      margin: [10, 0, 0, 0],
    },
  ];
};

export default Language;
