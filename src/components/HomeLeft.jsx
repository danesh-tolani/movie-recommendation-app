import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIUrls } from "../utils/APIUrls";
import GenreWrapper from "./GenreWrapper";
import "./HomeLeft.css";

const HomeLeft = () => {
  const [genres, setGenres] = useState([]);

  //   console.log(APIUrls.categoriesAPI);

  async function getCategories() {
    const response = await axios.get(APIUrls.categoriesAPI);
    setGenres(response.data.genres);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="border border-red-400 flex flex-col py-3 overflow-y-scroll h-[100vh] no-scrollbar w-[15rem]">
        {genres &&
          genres.map((genre) => {
            return (
              <GenreWrapper
                key={genre.id}
                genre={genre.name}
              />
            );
          })}
      </div>
    </>
  );
};

export default HomeLeft;
