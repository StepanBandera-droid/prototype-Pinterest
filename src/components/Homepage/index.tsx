import { useState, useEffect, type ReactElement } from "react";
import Card from "../Card/index.tsx";
import images from "../../assets/data/images.json";

interface IImageData {
  id: number;
  src: string;
  alt: string;
  isFavorite: boolean;
}

const Hompage = (): ReactElement => {
  const [data, setData] = useState<IImageData[]>(images);

  const handleClick = (): void => {};

  return (
    <div className="gallery">
      {data.map((image) => (
        <Card
          id={image.id}
          src={image.src}
          alt={image.alt}
          onClick={handleClick}
        ></Card>
      ))}
    </div>
  );
};

export default Hompage;
