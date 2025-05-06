import { useEffect, useState } from "react";
import { fetchTopAnimes, fetchGenres, searchAnime } from "../../utils/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import SearchForm from "../../components/SearchForm/SearchForm";
import GenreFilter from "../../components/GenreFilter/GenreFilter";
import Pagination from "../../components/Pagination/Pagination";
import Preloader from "../../components/Preloader/Preloader";

const AnimePage = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadAnimes = async () => {
      setLoading(true);
      let data;

      if (searchQuery) {
        data = await searchAnime(searchQuery, currentPage);
      } else {
        data = await fetchTopAnimes(currentPage);
      }

      setAnimes(data || []);
      setLoading(false);
    };

    loadAnimes();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchGenres();
        console.log("Datos de géneros:", data);
        setGenres(data?.data || data || []);
      } catch (err) {
        console.error("Error al cargar géneros", err);
        setGenres([]);
      }
    };

    loadGenres();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="anime-page">
      <h2>Explora Animes</h2>

      <SearchForm onSearch={handleSearch} />
    </section>
  );
};

export default AnimePage;
