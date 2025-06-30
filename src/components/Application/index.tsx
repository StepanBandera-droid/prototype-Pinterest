import type { ReactElement } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

import Hompage from "../Homepage";
import Favorites from "../Favorites";

const App = (): ReactElement => {
  return (
    <>
      <header>
        <Link to="/">Главная</Link>
        <Link to="/favorites">Избранное</Link>
      </header>

      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
export default App;
