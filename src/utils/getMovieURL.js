import axios from "axios";

async function getMovieURL(id) {
  const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
  const response = await axios.get(movieAPI);
  return response?.data?.homepage;
}

export default getMovieURL;
