const API_URL = "https://animedb1.p.rapidapi.com";
const API_KEY = "fab60d431dmsh6a8f42ba4048665p1e14c7jsn8c6bab8a34cd";

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "animedb1.p.rapidapi.com",
};

export const fetchTopAnimes = async (page = 1) => {
  const res = await fetch(`${API_URL}/top/anime?page=${page}`, { headers });
  return await res.json();
};

export const fetchTopCharacters = async () => {
  const res = await fetch(`${API_URL}/top/characters`, { headers });
  return await res.json();
};

export const fetchGenres = async () => {
  const res = await fetch(`${API_URL}/genres/anime`, { headers });
  return await res.json();
};

export const searchAnime = async (query, page = 1) => {
  const res = await fetch(
    `${API_URL}/anime?name=${encodeURIComponent(query)}&page=${page}`,
    { headers }
  );
  return await res.json();
};

export const fetchAnimesByGenre = async (genreId, page = 1) => {
  try {
    const res = await fetch(`${API_URL}/anime?genre=${genreId}&page=${page}`, {
      headers,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Respuesta no OK:", text);
      throw new Error(`HTTP status ${res.status}: ${text}`);
    }

    const text = await res.text();
    console.log("Respuesta cruda:", text);

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error cargando animes:", error.message);
    return { data: [] };
  }
};
