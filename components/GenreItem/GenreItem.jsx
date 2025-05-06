import { Link } from "react-router-dom";
import "./GenreItem.css";

export const GenreItem = ({ genre }) => {
  return (
    <div className="genre-item">
      <Link to={`/animes/genre/${genre.mal_id}`} className="genre-item__link">
        <h3 className="genre-title">{genre.name}</h3>
        <p className="genre-title__count">Animes: {genre.count}</p>
      </Link>
    </div>
  );
};
