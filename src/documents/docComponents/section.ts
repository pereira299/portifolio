const section = (icon: string, title: string, content: any[]) => {
  return [
    {
      table: {
        widths: ["10%", "90%"],
        body: [
          [
            {
              image: icon,
              width: 20,
              height: 20,
              alignment: "center",
            },
            {
              text: title,
              style: "sectionHeader",
            },
          ],
        ],
      },
      layout: {
        hLineWidth: (i: number) => (i === 1 ? 1 : 0),
        vLineWidth: () => 0,
        hLineColor: (i: number) => (i === 1 ? "#0369a1" : "white"),
        paddingLeft: () => 0,
      },
      width: "50%",
      margin: [0, 10, 0, 5],
    },
    ...content,
  ];
};

export default section;
