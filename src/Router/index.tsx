import Hompage from "../pages/Homepage";
import Favorites from "../pages/Favorites";
import Header from "../components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import type { IImageData } from "../domains/image";

interface IRouter {
  data: IImageData[];
  onToggleFavorite: (id: number) => void;
}

const Router: React.FC<{
  data: IImageData[];
  onToggleFavorite: (id: number) => void;
}> = ({ data, onToggleFavorite }: IRouter) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Hompage data={data} onToggleFavorite={onToggleFavorite} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites data={data} onToggleFavorite={onToggleFavorite} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
