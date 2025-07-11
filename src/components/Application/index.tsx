import Router from "../../Router";
import imageData from "../../assets/data/images.json";
import type { IImageData } from "../../domains/image";

import type { ReactElement } from "react";
import { useState } from "react";
import "./styles.css";

const App = (): ReactElement => {
  const [data, setData] = useState<IImageData[]>(imageData);

  const handleToggleFavorite = (id: number) => {
    setData((prevData) =>
      prevData.map((image) =>
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
