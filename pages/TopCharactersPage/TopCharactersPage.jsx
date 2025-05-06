import { useEffect, useState } from "react";
import { fetchTopCharacters } from "../../utils/api";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Preloader from "../../components/Preloader/Preloader";
import "./TopCharactersPage.css";

const TopCharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchTopCharacters();

        const validData = Array.isArray(data?.data) ? data.data : [];

        setCharacters(validData);
      } catch (error) {
        console.error("Error cargando personajes:", error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return (
    <section className="top-characters">
      <div className="top-characters__hero">
        <h2 className="top-characters__title">TOP PERSONAJES</h2>
      </div>

      <div className="top-characters__list-container">
        {loading ? (
          <Preloader />
        ) : characters.length > 0 ? (
          <div className="top-characters__list">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        ) : (
          <p>No se encontraron personajes.</p>
        )}
      </div>
    </section>
  );
};

export default TopCharactersPage;
