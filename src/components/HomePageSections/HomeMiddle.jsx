import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { APIUrls } from "../../utils/APIUrls";
import FlexBetween from "../FlexBetween";
import MovieCard from "../MovieCard";

const HomeMiddle = () => {
  const [movies, setMovies] = useState([]);

  const { genre } = useSelector((state) => state.ui);

  async function getMovies() {
    if (genre.id == null) {
      const response = await axios.get(APIUrls.nowPlayingAPI);
      setMovies(response.data.results);
    } else {
      const response = await axios.get(APIUrls.accordingToGenre.replace("genres=", `genres=${genre.id}`));
      setMovies(response.data.results);
    }
  }

  useEffect(() => {
    getMovies();
  }, [genre.id]);

  console.log("🚀 ~ file: HomeMiddle.jsx:26 ~ HomeMiddle ~ movies", movies);

  return (
    <FlexBetween sx={{ flexWrap: "wrap", columnGap: "50px", padding: "0 2rem", justifyContent: "flex-start", alignItems: "start", width: "85%" }}>
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
