import { useState, useEffect } from "react";
import "./AnimeCard.css";

const AnimeCard = ({ anime }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="anime-card" onClick={openPopup}>
        <img
          src={anime.images?.jpg?.image_url || "ruta-a-imagen-default.png"}
          alt={anime.title}
          className="anime-card__image"
        />
        <h3 className="anime-card__title">{anime.title}</h3>
        <p className="anime-card__score">Calificación: {anime.score}</p>
        <p className="anime-card__episodes">Episodios: {anime.episodes}</p>
      </div>

      {isOpen && (
        <div className="anime-popup-overlay" onClick={closePopup}>
          <div className="anime-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              <img
                src="/images/ClosePopup.png"
                alt="Cerrar"
                className="popup-close-icon"
              />
            </button>
            <div className="popup-content">
              <div className="popup-image">
                <img src={anime.images?.jpg?.image_url} alt={anime.title} />
                <div className="popup-details">
                  <p>
                    <strong>Título:</strong> {anime.title}
                  </p>
                  <p>
                    <strong>Calificación:</strong> {anime.score}
                  </p>
                  <p>
                    <strong>Episodios:</strong> {anime.episodes}
                  </p>
                </div>
              </div>
              <div className="popup-text">
                <h2>Sinopsis</h2>
                <p>{anime.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeCard;
