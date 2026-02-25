import { searchGames } from "../services/rawg-api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";
import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";

function SearchResults() {
  const [games, setGames] = useState([]);
  // useSearchParams reads the URL to the query will load results matching the term
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function loadResults() {
      const results = await searchGames(query);
      setGames(results);
    }
    if (query) {
      loadResults();
    }
  }, [query]);

  return (
    <>
      <Nav />
      <SearchInput />
      <section id="search__results">
        <div className="container">
          <div className="row">
            <h2 className="section__title">Search Results for "{query}"</h2>
          </div>
          <div className="game__card">
            {games.map((game) => (
              <div className="game__info" key={game.id}>
                <img className="game__img" src={game.background_image} alt={game.name} />
                <h3 className="game__title">{game.name}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchResults;
