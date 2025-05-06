import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchAnime } from "../../utils/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import Preloader from "../../components/Preloader/Preloader";
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query || "");

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
  };

  useEffect(() => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchAnime(searchQuery);
        setResults(data || []);
      } catch (error) {
        console.error("Error buscando animes:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <section className="search-results">
      <div className="search-results__form-container">
        <SearchForm onSearch={handleSearch} />
      </div>

      {loading ? (
        <Preloader />
      ) : results.length > 0 ? (
        <AnimeList animes={results} />
      ) : searchQuery ? (
        <p className="no-results">
          No se encontraron animes para "{searchQuery}".
        </p>
      ) : null}
    </section>
  );
};

export default SearchResultsPage;
