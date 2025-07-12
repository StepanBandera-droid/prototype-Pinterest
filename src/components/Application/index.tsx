import Router from "../../Router";
import imageData from "../../assets/data/images.json";
import type { IImageData } from "../../domains/image";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import "./styles.css";

const App = (): ReactElement => {
  const [data, setData] = useState(() => {
    try {
      const savedImages = localStorage.getItem("images");
      return savedImages ? JSON.parse(savedImages) : imageData;
    } catch {
      return imageData;
    }
  });
  useEffect((): void => {
    localStorage.setItem("images", JSON.stringify(data));
  }, [data]);

  const handleToggleFavorite = (id: number) => {
    setData(
      data.map((image: IImageData) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  };
  return (
    <>
      <Router data={data} onToggleFavorite={handleToggleFavorite} />
    </>
  );
};
export default App;
