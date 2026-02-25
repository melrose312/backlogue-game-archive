import {fetchNewReleases} from '../../services/rawg-api'
import { useState, useEffect } from 'react';


function NewReleases() {
  const [releases, setNewReleases] = useState([]);
  

  useEffect(() => {
    async function loadNew() {
      const releasesData = await fetchNewReleases();
      console.log(releasesData);
      setNewReleases(releasesData);
    }
    loadNew();
  }, [])
  console.log(releases);

  return (
    <section id="new__releases">
      <div className="container">
        <div className="row">
          <h2 className="section__title">New Releases</h2>
        </div>
        <div className="new">
          { releases.map((game) => (
            <div className="new__release" key={game.id}>
              <img className="new__release--img" src={game.background_image} alt={game.name} />
              <h3 className="new__release--title">{game.name}</h3>
            </div>
          ))
            
          }
        </div>
      </div>
    </section>
  );
}

export default NewReleases;