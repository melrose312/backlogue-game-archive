import axios from "axios";

// THIS FILE CONTAINS FUNCTIONS ALL COMPONENTS WILL HAVE ACCESS TO

export async function fetchNewReleases() {
  const today = new Date();
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(today.getDate() - 14);

  const formatDate = (d) => d.toISOString().split("T")[0];

  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${formatDate(fourteenDaysAgo)},${formatDate(today)}&ordering=-released&page_size=30`,
  );
  return data.results.filter((game) => game.background_image).slice(0, 16);
}

export async function searchGames(query) {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${query}&page_size=30`,
  );
  
  const filtered = data.results.filter((game) => game.background_image).slice(0, 16);
  console.log(filtered);

  return filtered;
}
