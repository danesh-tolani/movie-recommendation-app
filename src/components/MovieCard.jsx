import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import getMovieURL from "../utils/getMovieURL";

const MovieCard = ({ movie }) => {
  const [url, setUrl] = useState("");
  const posterURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  getMovieURL(movie?.id).then((response) => setUrl(response));

  const buttonStyle = {
    position: "absolute",
    top: "calc(3rem * (1/2))",
    height: "2rem",
    right: "0",
    color: "#fff",
    backgroundColor: " rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
  };

  return (
    <Box sx={{ position: "relative" }}>
      <a
        href={url}
        target="_blank">
        <img
          style={{ height: "20rem", width: "calc(20rem * (9/16))", objectFit: "contain" }}
          src={posterURL}
          alt={movie.original_title}
        />
      </a>
      <Button sx={buttonStyle}>
        <AddIcon sx={{ height: "2rem" }} />
      </Button>
    </Box>
  );
};

export default MovieCard;
