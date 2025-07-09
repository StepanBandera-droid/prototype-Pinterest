import type { ReactElement } from "react";
import { useState } from "react";

interface IImageData {
  id: number;
  src: string;
  alt: string;
  isFavorite: boolean;
}

interface ICard {
  image: IImageData;
  onToggleFavorite: (id: number) => void;
}

const Card = ({ image, onToggleFavorite }: ICard): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img src={image.src} alt={image.alt}></img>
      <button
        id={String(image.id)}
        style={{ display: isHovered ? "block" : "none" }}
        className="add-favorite"
        onClick={() => onToggleFavorite(image.id)}
      >
        {image.isFavorite ? "Сохранено" : "Сохранить"}
      </button>
    </div>
  );
};

export default Card;
