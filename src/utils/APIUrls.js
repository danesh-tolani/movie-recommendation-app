// import { useSelector } from "react-redux";

// const { genre } = useSelector((state) => state.ui);

export const APIUrls = {
  categoriesAPI: `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
  nowPlayingAPI: `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
  accordingToGenre: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=&with_watch_monetization_types=flatrate`,
};
