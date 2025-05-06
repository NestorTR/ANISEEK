import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      {/* Botón menú móvil */}
      {!menuOpen && (
        <button
          className="navigation__toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <img
            src="/images/NavIcon.png"
            alt="Menú"
            className="navigation__icon"
          />
        </button>
      )}

      {/* Menú desplegable móvil */}
      <div
        className={`navigation__drawer ${
          menuOpen ? "navigation__drawer--open" : ""
        }`}
      >
        <button
          className="navigation__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <img
            src="/images/NavClose.png"
            alt="Cerrar"
            className="navigation__icon"
          />
        </button>

        <ul className="navigation__list navigation__list--mobile">
          <li>
            <Link
              to="/"
              className="navigation__list-item"
              onClick={() => setMenuOpen(false)}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              to="/buscar"
              className="navigation__list-item"
              onClick={() => setMenuOpen(false)}
            >
              BUSCAR ANIME
            </Link>
          </li>
          <li>
            <Link
              to="/top/animes"
              className="navigation__list-item"
              onClick={() => setMenuOpen(false)}
            >
              TOP ANIMES
            </Link>
          </li>
          <li>
            <Link
              to="/top/personajes"
              className="navigation__list-item"
              onClick={() => setMenuOpen(false)}
            >
              TOP PERSONAJES
            </Link>
          </li>
          <li>
            <Link
              to="/generos"
              className="navigation__list-item"
              onClick={() => setMenuOpen(false)}
            >
              GÉNEROS
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú desktop */}
      <ul className="navigation__list navigation__list--desktop">
        <li>
          <Link to="/" className="navigation__list-item">
            INICIO
          </Link>
        </li>
        <li>
          <Link to="/buscar" className="navigation__list-item">
            BUSCAR ANIME
          </Link>
        </li>
        <li>
          <Link to="/top/animes" className="navigation__list-item">
            TOP ANIMES
          </Link>
        </li>
        <li>
          <Link to="/top/personajes" className="navigation__list-item">
            TOP PERSONAJES
          </Link>
        </li>
        <li>
          <Link to="/generos" className="navigation__list-item">
            GÉNEROS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
