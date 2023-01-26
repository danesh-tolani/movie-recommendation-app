import React, { useMemo } from "react";
import { Box, createTheme, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../features/UI/uiSlice";
import { themeSettings } from "../theme";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const GenreWrapper = ({ currentGenre, currentId }) => {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const { theme, genre } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const bgColor = mode.palette.background.default;
  let textColor = mode.palette.primary.dark;
  const borderColor = mode.palette.neutral.medium;

  if (currentId == genre.id) {
    textColor = "#E71D60";
  }

  return (
    <FlexBetween
      sx={{ padding: "1rem 2rem", justifyContent: "flex-start", columnGap: "1rem", cursor: "pointer" }}
      onClick={() => {
        dispatch(setGenre({ name: currentGenre, id: currentId }));
      }}>
      {isNonMobileScreens && <SlideshowIcon style={{ color: textColor, height: "2rem" }} />}
      <Typography sx={{ color: textColor }}>{currentGenre}</Typography>
    </FlexBetween>
  );
};

export default GenreWrapper;
