import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGenre } from "../features/UI/uiSlice";

const GenreWrapper = ({ genre, id }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{ padding: "1rem 2rem 1rem 4rem", border: `2px solid red` }}
      onClick={() => {
        dispatch(setGenre({ name: genre, id: id }));
      }}>
      <Typography>{genre}</Typography>
    </Box>
  );
};

export default GenreWrapper;
