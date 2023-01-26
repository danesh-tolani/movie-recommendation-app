import { Box, createTheme } from "@mui/system";
import { Button } from "@mui/material";

import React, { useMemo, useState } from "react";
import FlexBetween from "../components/FlexBetween";
import LoadingScreen from "../components/LoadingScreen";
import MovieCard from "../components/MovieCard";
import { searchMovie } from "../utils/getMovieURL";
import "../components/HomePageSections/HomeLeft.css";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";

const initialValues = {
  movie: "",
  year: "",
};

const SearchPage = () => {
  const flexStyle = {
    flexWrap: "wrap",
    columnGap: "50px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const [values, setValues] = useState(initialValues);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { genre, theme } = useSelector((state) => state.ui);

  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);
  const borderColor = mode.palette.neutral.medium;
  const textColor = mode.palette.primary.dark;
  const backgroundColor = mode.palette.background.default;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    searchMovie(values)
      .then((response) => setMovies(response.data.results))
      .then(
        setTimeout(() => {
          setLoading(false);
        }, 3000)
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <FlexBetween style={{ justifyContent: "center", padding: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 items-center">
            <input
              className=" "
              value={values.company}
              onChange={handleInputChange}
              name="movie"
              label="Movie"
              style={{ border: `1px solid ${borderColor}`, backgroundColor: backgroundColor, color: textColor, padding: "0 1rem", width: "20rem", fontSize: "20px", borderRadius: "5px" }}
            />
            <input
              className=" "
              value={values.position}
              onChange={handleInputChange}
              name="year"
              label="Year"
              style={{ border: `1px solid ${borderColor}`, backgroundColor: backgroundColor, color: textColor, padding: "0 1rem", width: "20rem", fontSize: "20px", borderRadius: "5px" }}
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{ fontWeight: "600", border: "2px solid", width: "5rem" }}>
              Submit
            </Button>
          </div>
        </form>
      </FlexBetween>
      {loading ? (
        <FlexBetween style={{ justifyContent: "center", height: "67vh" }}>
          <LoadingScreen />
        </FlexBetween>
      ) : (
        <Box
          style={{ backgroundColor: backgroundColor, height: "67vh", overflowY: "scroll" }}
          className="no-scrollbar ">
          <h1
            className="text-center text-3xl pt-4"
            style={{ color: textColor }}>
            Search Results
          </h1>
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
      )}
    </>
  );
};

export default SearchPage;
