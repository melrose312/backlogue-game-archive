import axios from "axios";

export async function fetchNewReleases() {
    const today = new Date();
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(today.getDate() - 14);

    const formatDate = (d) => d.toISOString().split("T")[0];

    const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${formatDate(fourteenDaysAgo)},${formatDate(today)}&ordering=-released&page_size=16`
    );
    return data.results;
}



