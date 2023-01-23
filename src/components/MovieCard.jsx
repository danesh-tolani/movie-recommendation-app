import { Box, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  const buttonStyle = {
    position: "absolute",
    top: "calc(3rem * (1/2))",
    height: "2rem",
    right: "0",
    color: "#fff",
    backgroundColor: " rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
  };

  return (
    <Box sx={{ position: "relative" }}>
      <img
        style={{ height: "20rem", width: "calc(20rem * (9/16))", objectFit: "contain" }}
        src={posterURL}
        alt={movie.original_title}
      />
      <Button sx={buttonStyle}>
        <AddIcon sx={{ height: "2rem" }} />
      </Button>
    </Box>
  );
};

export default MovieCard;
