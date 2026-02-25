import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
