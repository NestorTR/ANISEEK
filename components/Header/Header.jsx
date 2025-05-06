import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        ANISEEK
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
