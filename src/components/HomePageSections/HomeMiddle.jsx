import { Box, createTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../../theme";
import { APIUrls } from "../../utils/APIUrls";
import FlexBetween from "../FlexBetween";
import ImageSlider from "../ImageSlider/ImageSlider";
import LoadingScreen from "../LoadingScreen";
import MovieCard from "../MovieCard";

const HomeMiddle = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const { genre, theme } = useSelector((state) => state.ui);
  const { list } = useSelector((state) => state.watchList);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const borderColor = mode.palette.neutral.medium;

  const flexStyle = {
    flexWrap: "wrap",
    columnGap: `${isNonMobileScreens ? "50px" : "30px"}`,
    padding: "1rem 1rem",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    rowGap: "30px",
    // border: "2px solid blue",
  };

  async function getMovies(num) {
    if (genre.id == null) {
      setLoading(true);
      await axios
        .get(APIUrls.nowPlayingAPI.replace("page=1", `page=${num}`))
        .then((response) => {
          console.log(response.data.results);
          setMovies(response.data.results);
        })
        .then(
          setTimeout(() => {
            setLoading(false);
          }, 3000)
        );
    } else {
      setLoading(true);
      await axios
        .get(APIUrls.accordingToGenre.replace("page=1&with_genres=", `page=${num}&with_genres=${genre.id}`))
        .then((response) => setMovies(response.data.results))
        .then(
          setTimeout(() => {
            setLoading(false);
          }, 3000)
        );
    }
  }

  useEffect(() => {
    getMovies();
  }, [genre.id]);

  return (
    <>
      {isNonMobileScreens && <ImageSlider />}
      {loading ? (
        <FlexBetween style={{ justifyContent: "center", height: "80vh" }}>
          <LoadingScreen />
        </FlexBetween>
      ) : (
        <Box>
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
          <FlexBetween sx={{ padding: "1rem", width: isNonMobileScreens ? "40%" : "90%", margin: "0 auto" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
              return (
                <p
                  style={{ color: number == activePage ? "red" : "black", cursor: "pointer" }}
                  onClick={() => {
                    getMovies(number);
                    setActivePage(number);
                  }}>
                  {number}
                </p>
              );
            })}
          </FlexBetween>
        </Box>
      )}
    </>
  );
};

export default HomeMiddle;
