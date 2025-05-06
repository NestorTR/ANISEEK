import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import HomePage from "../../pages/HomePage/HomePage";
import AnimePage from "../../pages/AnimePage/AnimePage";
import TopAnimesPage from "../../pages/TopAnimesPage/TopAnimesPage";
import TopCharactersPage from "../../pages/TopCharactersPage/TopCharactersPage";
import GenresPage from "../../pages/GenresPage/GenresPage";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";
import GenreResultsPage from "../../pages/GenreResultsPage/GenreResultsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/top/animes" element={<TopAnimesPage />} />
            <Route path="/top/personajes" element={<TopCharactersPage />} />
            <Route path="/generos" element={<GenresPage />} />
            <Route
              path="/animes/genre/:genreId"
              element={<GenreResultsPage />}
            />
            <Route path="/buscar" element={<SearchResultsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
