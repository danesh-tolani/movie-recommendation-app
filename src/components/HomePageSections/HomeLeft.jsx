import { createTheme, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../../theme";
import { APIUrls } from "../../utils/APIUrls";
import FlexBetween from "../FlexBetween";
import GenreWrapper from "../GenreWrapper";
import "./HomeLeft.css";

const HomeLeft = () => {
  const [genres, setGenres] = useState([]);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const nonMobileScreenStyles = {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    height: "100vh",
  };
  const mobileScreenStyles = {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100vw",
  };

  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

  const textColor = mode.palette.primary.dark;
  const borderColor = mode.palette.neutral.medium;

  async function getCategories() {
    const response = await axios.get(APIUrls.categoriesAPI);
    setGenres(response.data.genres);
  }
  // flex flex-col overflow-y-scroll h-[100vh]
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <FlexBetween sx={{ flexDirection: "column", width: "20%", alignItems: "flex-start", borderRight: isNonMobileScreens && `1px solid ${borderColor}` }}>
      <Typography
        style={{ color: textColor, padding: "1rem 2rem" }}
        variant="h5">
        Categories
      </Typography>
      <div
        className="no-scrollbar "
        style={isNonMobileScreens ? nonMobileScreenStyles : mobileScreenStyles}>
        {genres &&
          genres.map((genre) => {
            return (
              <GenreWrapper
                key={genre.id}
                currentGenre={genre.name}
                currentId={genre.id}
              />
            );
          })}
      </div>
    </FlexBetween>
  );
};

export default HomeLeft;
