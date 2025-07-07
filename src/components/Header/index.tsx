import type { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/favorites">Избранное</Link>
    </header>
  );
};

export default Header;
