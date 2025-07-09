import type { ReactElement } from "react";
import { useState } from "react";

interface ICard {
  id: number;
  src: string;
  alt: string;
  onClick: () => void;
  children?: string;
}

const Card = ({ id, src, alt, onClick }: ICard): ReactElement => {
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
        id={String(id)}
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
