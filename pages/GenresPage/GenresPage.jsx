import { useEffect, useState } from "react";
import { fetchGenres } from "../../utils/api";
import { GenreItem } from "../../components/GenreItem/GenreItem";
import Preloader from "../../components/Preloader/Preloader";
import "./GenresPage.css";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchGenres();

        const validData = Array.isArray(data?.data) ? data.data : [];

        setGenres(validData);
      } catch (error) {
        console.error("Error cargando géneros:", error);
        setGenres([]);
      } finally {
        setLoading(false);
      }
    };

    loadGenres();
  }, []);

  return (
    <section className="genres-page">
      <div className="genres-anime__hero">
        <h2 className="genres-anime__title">GÉNEROS DE ANIME</h2>
      </div>

      {loading ? (
        <Preloader />
      ) : genres.length > 0 ? (
        <div className="genres-list">
          {genres.map((genre) => (
            <GenreItem key={genre.mal_id} genre={genre} />
          ))}
        </div>
      ) : (
        <p>No hay géneros disponibles.</p>
      )}
    </section>
  );
};

export default GenresPage;
