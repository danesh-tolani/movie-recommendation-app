import { createTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../../theme";
import { APIUrls } from "../../utils/APIUrls";
import GenreWrapper from "../GenreWrapper";
import "./HomeLeft.css";

const HomeLeft = () => {
  const [genres, setGenres] = useState([]);

  const { theme } = useSelector((state) => state.ui);
  const mode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

  const textColor = mode.palette.primary.dark;
  const borderColor = mode.palette.neutral.medium;

  async function getCategories() {
    const response = await axios.get(APIUrls.categoriesAPI);
    setGenres(response.data.genres);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div
        className=" flex flex-col overflow-y-scroll h-[100vh] no-scrollbar w-[20%] "
        style={{ border: `2px solid ${borderColor}` }}>
        {genres &&
          genres.map((genre) => {
            return (
              <GenreWrapper
                key={genre.id}
                genre={genre.name}
                id={genre.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default HomeLeft;
