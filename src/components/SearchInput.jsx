
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SearchInput() {
  return (
    <>
      <section id="search">
        <div className="search__container">
          <div className="search__input">
            <input
              id="search__input"
              type="text"
              placeholder="Search 100,000+ games"
            />
            <button>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchInput;

