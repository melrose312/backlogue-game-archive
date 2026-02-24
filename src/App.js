import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";
import NewReleases from "./components/ui/NewReleases";
import "./index.css";

function App() {
  return (
    <div className="App">
      <><Nav />
      <SearchInput />
      <NewReleases />
      </>
    </div>
  );
}

export default App;
