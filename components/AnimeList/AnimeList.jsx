import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.css";

const AnimeList = ({ animes }) => {
  const validAnimes = Array.isArray(animes) ? animes : [];

  return (
    <div className="anime-container">
      <div className="anime-list">
        {validAnimes.length > 0 ? (
          validAnimes.map((anime) => (
            <div className="anime-card-wrapper" key={anime.mal_id}>
              <AnimeCard anime={anime} />
            </div>
          ))
        ) : (
          <p>No se encontraron animes.</p>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
