import { useEffect, useState } from "react";
import { fetchTopAnimes } from "../../utils/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import Preloader from "../../components/Preloader/Preloader";
import "./TopAnimesPage.css";

const TopAnimesPage = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimes = async () => {
      try {
        const data = await fetchTopAnimes();

        const validAnimes = Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];

        setAnimes(validAnimes);
      } catch (error) {
        console.error("Error cargando animes:", error);
        setAnimes([]);
      } finally {
        setLoading(false);
      }
    };

    loadAnimes();
  }, []);

  return (
    <section className="top-animes">
      <div className="top-animes__hero">
        <h2 className="top-animes__title">TOP ANIMES</h2>
      </div>
      <section className="top-animes__content">
        {loading ? (
          <Preloader />
        ) : animes.length > 0 ? (
          <AnimeList animes={animes} />
        ) : (
          <p>No hay animes disponibles.</p>
        )}
      </section>
    </section>
  );
};

export default TopAnimesPage;
