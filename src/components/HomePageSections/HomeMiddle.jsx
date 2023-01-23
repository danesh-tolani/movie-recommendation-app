import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { APIUrls } from "../../utils/APIUrls";
import FlexBetween from "../FlexBetween";
import LoadingScreen from "../LoadingScreen";
import MovieCard from "../MovieCard";

const HomeMiddle = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { genre } = useSelector((state) => state.ui);

  async function getMovies() {
    if (genre.id == null) {
      setLoading(true);
      await axios
        .get(APIUrls.nowPlayingAPI)
        .then((response) => setMovies(response.data.results))
        .then(
          setTimeout(() => {
            setLoading(false);
          }, 3000)
        );
    } else {
      setLoading(true);
      await axios
        .get(APIUrls.accordingToGenre.replace("genres=", `genres=${genre.id}`))
        .then((response) => setMovies(response.data.results))
        .then(
          setTimeout(() => {
            setLoading(false);
          }, 3000)
        );
    }
  }

  console.log("🚀 ~ file: HomeMiddle.jsx:26 ~ HomeMiddle ~ movies", movies);
  useEffect(() => {
    getMovies();
  }, [genre.id]);

  return loading ? (
    <FlexBetween sx={{ flexWrap: "wrap", columnGap: "50px", padding: "0 2rem", justifyContent: "center", alignItems: "start", width: "85%" }}>
      <LoadingScreen />
    </FlexBetween>
  ) : (
    <FlexBetween sx={{ flexWrap: "wrap", columnGap: "50px", padding: "0 2rem", justifyContent: "center", alignItems: "start", width: "85%" }}>
      {movies &&
        movies.map((movie, i) => {
          if (i < 20) {
            return (
              <div key={i}>
                <MovieCard movie={movie} />
              </div>
            );
          }
        })}
    </FlexBetween>
  );
};

export default HomeMiddle;
