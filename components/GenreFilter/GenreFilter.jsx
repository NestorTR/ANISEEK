const GenreFilter = ({ genres }) => {
  const validGenres = Array.isArray(genres) ? genres : [];

  return (
    <div className="genre-filter">
      <label htmlFor="genre-select" className="genre-filter__label">
        Filtrar por género:
      </label>
      <select id="genre-select" className="genre-filter__select">
        <option value="">Todos</option>
        {validGenres.length > 0 ? (
          validGenres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))
        ) : (
          <option disabled>No hay géneros disponibles</option>
        )}
      </select>
    </div>
  );
};

export default GenreFilter;
