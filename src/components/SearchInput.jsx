import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  }
  return (
    <>
      <section id="search">
        <div className="search__container">
          <div className="search__input">
            <input
              id="search__input"
              type="text"
              placeholder="Search 100,000+ games"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchInput;
