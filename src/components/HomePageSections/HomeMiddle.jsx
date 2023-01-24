import { Box, createTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../../theme";
import { APIUrls } from "../../utils/APIUrls";
import FlexBetween from "../FlexBetween";
import ImageSlider from "../ImageSlider/ImageSlider";
import LoadingScreen from "../LoadingScreen";
import MovieCard from "../MovieCard";
// import { FaBeer, FaChevronLeft } from "react-icons/fa";

const HomeMiddle = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { genre, theme } = useSelector((state) => state.ui);

  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const borderColor = mode.palette.neutral.medium;
  console.log(borderColor);

  const flexStyle = {
    flexWrap: "wrap",
    columnGap: "50px",
    // padding: "0 1rem",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    // border: "2px solid blue",
  };

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
    <FlexBetween style={{ justifyContent: "center" }}>
      <LoadingScreen />
    </FlexBetween>
  ) : (
    <Box style={{ border: `1px solid ${borderColor}` }}>
      <ImageSlider />
      <FlexBetween sx={{ ...flexStyle }}>
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
    </Box>
  );
};

export default HomeMiddle;
