import type { ReactElement } from "react";
import { useState } from "react";
import type { IImageData } from "../../domains/image";

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
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
          backgroundColor: image.isFavorite ? "grey" : "red",
        }}
        className="add-favorite"
        onClick={() => onToggleFavorite(image.id)}
      >
        {image.isFavorite ? "Сохранено" : "Сохранить"}
      </button>
    </div>
  );
};

export default Card;
