import { useState, useEffect, type ReactElement } from "react";
import Card from "../Menu/index.tsx";
import images from "../../assets/data/images.json";

interface IImageData {
  id: number;
  src: string;
  alt: string;
}

const Hompage = (): ReactElement => {
  const [data, setData] = useState<IImageData[]>(images);
  // const [buttonText, setButtonText] = useState<string>("Сохранить");

  // useEffect(() => {
  //   const savedText: string = localStorage.getItem("button-text");
  //   setButtonText(savedText);
  // }, []);

  const handleClick = (): void => {
    console.log("Click");
    // if (buttonText == "Сохранить") {
    //   setButtonText("Сохранено");
    // } else {
    //   setButtonText("Сохранить");
    // }
  };

  return (
    <div className="gallery">
      {data.map((image) => (
        <Card
          key={image.id}
          src={image.src}
          alt={image.alt}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Hompage;
