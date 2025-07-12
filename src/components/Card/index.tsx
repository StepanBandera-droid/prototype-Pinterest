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
      <svg
        xmlns="https://i.pinimg.com/originals/8f/d4/5a/8fd45a77cea7467eea1d3ac6fe575ba2.png"
        viewBox="0 0 24 24"
        fill="gold"
        width="24"
        height="24"
        style={{
          opacity: image.isFavorite ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
        }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
  );
};

export default Card;
