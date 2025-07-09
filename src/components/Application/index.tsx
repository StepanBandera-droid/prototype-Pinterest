import Header from "../Header";
import Hompage from "../Homepage";
import Favorites from "../Favorites";
import imageData from "../../assets/data/images.json";

import type { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

interface IImageData {
  id: number;
  src: string;
  alt: string;
  isFavorite: boolean;
}

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Hompage data={data} onToggleFavorite={handleToggleFavorite} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites data={data} onToggleFavorite={handleToggleFavorite} />
          }
        />
      </Routes>
    </>
  );
};
export default App;
