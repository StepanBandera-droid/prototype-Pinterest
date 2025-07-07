import type { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Header from "../Header";
import Hompage from "../Homepage";
import Favorites from "../Favorites";

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
export default App;
