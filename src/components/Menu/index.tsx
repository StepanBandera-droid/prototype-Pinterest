import type { ReactElement } from "react";
import { useState } from "react";

interface ICard {
  src: string;
  alt: string;
  onClick: () => void;
}

const Card = ({ src, alt, onClick }: ICard): ReactElement => {
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
      <img src={src} alt={alt}></img>
      <button
        style={{ display: isHovered ? "block" : "none" }}
        className="add-favorite"
        onClick={onClick}
      >
        Сохранить
      </button>
    </div>
  );
};

export default Card;
