import { Box, createTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import FlexBetween from "../components/FlexBetween";
import LoadingScreen from "../components/LoadingScreen";
import MovieCard from "../components/MovieCard";
import { themeSettings } from "../theme";
import "../components/HomePageSections/HomeLeft.css";
const WatchListPage = () => {
  const [loading, setLoading] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const { genre, theme } = useSelector((state) => state.ui);
  const { list } = useSelector((state) => state.watchList);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const borderColor = mode.palette.neutral.medium;
  const textColor = mode.palette.primary.dark;
  const backgroundColor = mode.palette.background.default;

  const flexStyle = {
    flexWrap: "wrap",
    columnGap: `${isNonMobileScreens ? "50px" : "30px"}`,
    padding: "0 1rem",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    rowGap: "30px",
  };

  return loading ? (
    <FlexBetween style={{ justifyContent: "center", height: "90vh" }}>
      <LoadingScreen />
    </FlexBetween>
  ) : (
    <Box
      style={{ backgroundColor: backgroundColor, height: "90vh", overflowY: "scroll" }}
      className="no-scrollbar ">
      <h1
        className="text-center text-4xl py-4"
        style={{ color: textColor }}>
        Watch List
      </h1>
      <FlexBetween sx={{ ...flexStyle }}>
        {list &&
          list.map((movie, i) => {
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

export default WatchListPage;
