const Info = ({ image, text }: { image: string; text: string }) => {
  return [
    {
      image: image,
      width: 10,
      height: 10,
    },
    {
      text: text,
      fontSize: 10,
      bold: true,
    },
  ];
};

export default Info;