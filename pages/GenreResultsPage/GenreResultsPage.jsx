import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimesByGenre } from "../../utils/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import Preloader from "../../components/Preloader/Preloader";
import GenreFilter from "../../components/GenreFilter/GenreFilter";

const GenreResultsPage = () => {
  const { genreId } = useParams();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimesByGenre = async () => {
      setLoading(true);
      try {
        const data = await fetchAnimesByGenre(genreId);
        const validData = Array.isArray(data?.data) ? data.data : [];

        setAnimes(validData);
      } catch (error) {
        console.error("Error cargando animes:", error);
        setAnimes([]);
      } finally {
        setLoading(false);
      }
    };

    loadAnimesByGenre();
  }, [genreId]);

  return (
    <section className="genre-results">
      <h2>{genreId}</h2>
      {loading ? <Preloader /> : <AnimeList animes={animes} />}
    </section>
  );
};

export default GenreResultsPage;
