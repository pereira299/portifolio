import { StaticImageData } from "next/image";

export const imageToBase64 = (image: StaticImageData): Promise<string> => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      var ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = (error) => {
      reject(error);
    };

    img.src = image.src;
  });
};
