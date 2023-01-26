import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { getMovieURL } from "../utils/getMovieURL";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../features/watchList/watchlistSlice";

const MovieCard = ({ movie }) => {
  const [url, setUrl] = useState("");
  const posterURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  getMovieURL(movie?.id).then((response) => setUrl(response));

  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.watchList);

  const buttonStyle = {
    position: "absolute",
    top: "0",
    height: "2rem",
    right: "0",
    color: "#fff",
    backgroundColor: " rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
  };

  function addMovie() {
    const isPresent = list.find((watchListMovie) => {
      if (watchListMovie.id === movie.id) {
        return true;
      }
      return false;
    });

    if (isPresent === undefined) {
      dispatch(addToWatchList({ ...movie, added: true }));
    } else {
      dispatch(removeFromWatchList(movie));
    }
  }

  return (
    <Box sx={{ position: "relative" }}>
      <a
        href={url}
        target="_blank">
        {movie.poster_path ? (
          <img
            style={{ height: "18rem", width: "calc(20rem * (9/16))", objectFit: "cover" }}
            src={posterURL}
            alt={movie.original_title}
          />
        ) : (
          <p style={{ height: "18rem", width: "calc(20rem * (9/16))", fontSize: "20px", padding: "3rem 0", backgroundColor: "beige" }}>{movie?.original_title}</p>
        )}
      </a>
      <Button
        sx={buttonStyle}
        onClick={() => addMovie()}>
        {movie.added ? <CloseIcon sx={{ height: "2rem" }} /> : <AddIcon sx={{ height: "2rem" }} />}
      </Button>
    </Box>
  );
};

export default MovieCard;
