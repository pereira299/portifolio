const Help = () => {
    const works = [
        {
            title: "LogPAEM - Lógica de Programação para estudantes do ensino Medio",
            description: "O LogPAEM é um projeto de extensão da UTFPR Campus Toledo, que tem como objetivo ensinar lógica de programação para estudantes do ensino médio. O projeto é realizado por alunos do curso de Sistemas para Internet, com a supervisão de professores do curso.",
        }, 
        {
            title: "Juventude Mariana Vicentina - JMV",
            description: "A Juventude Mariana Vicentina é um grupo de jovens católicos que se reúne semanalmente para rezar e realizar ações sociais. O grupo é formado por jovens de 15 a 25 anos.",
        }
    ]

    return [
        ...works.map((project) => {
            const end = project.description.indexOf(".") + 1;
            return [
              {
                text: project.title,
                style: {
                  bold: true,
                },
              },
              { text: project.description.slice(0, end), margin: [0, 0, 0, 10] },
            ];
          }),
    ];
};

export default Help;