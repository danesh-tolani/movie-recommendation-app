import React, { useMemo } from "react";
import { Box, createTheme, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../features/UI/uiSlice";
import { themeSettings } from "../theme";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const GenreWrapper = ({ genre, id }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const bgColor = mode.palette.background.default;
  const textColor = mode.palette.primary.dark;

  return (
    <Box
      sx={{ padding: "1rem 2rem 1rem 4rem" }}
      onClick={() => {
        dispatch(setGenre({ name: genre, id: id }));
      }}>
      <SlideshowIcon />
      <Typography sx={{ color: textColor }}>{genre}</Typography>
    </Box>
  );
};

export default GenreWrapper;
