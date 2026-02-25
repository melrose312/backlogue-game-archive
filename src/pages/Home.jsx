import Nav from "../components/Nav";
import SearchInput from "../components/SearchInput";
import NewReleases from "../components/ui/NewReleases";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Nav />
      <SearchInput />
      <NewReleases />
      <Footer />
      </>
  )
}

export default Home