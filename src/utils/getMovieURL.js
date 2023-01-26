import axios from "axios";

export async function getMovieURL(id) {
  const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
  const response = await axios.get(movieAPI);
  return response?.data?.homepage;
}

export async function searchMovie(data) {
  let API_Query = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}`;

  if (data.movie !== null) {
    API_Query = API_Query + `&query=${data.movie}`;
  }
  if (data.year !== null) {
    API_Query = API_Query + `&primary_release_year=${data.year}`;
  }

  const response = await axios.get(API_Query);
  return response;
}
