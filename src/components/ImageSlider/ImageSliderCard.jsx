import React, { useState } from "react";
import getMovieURL from "../../utils/getMovieURL";

const ImageSliderCard = ({ movie }) => {
  const [url, setUrl] = useState("");

  const blurEffect = {
    color: "#fff",
    backgroundColor: " rgba(255,255,255,0.06)",
    backdropFilter: "blur(20px)",
    width: "400px",
    borderRadius: "20px",
  };
  // movie = {
  //   adult: false,
  //   backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
  //   genre_ids: [16, 28, 12, 35, 10751, 14],
  //   id: 315162,
  //   original_language: "en",
  //   original_title: "Puss in Boots: The Last Wish",
  //   overview:
  //     "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  //   popularity: 10011.23,
  //   poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  //   release_date: "2022-12-07",
  //   title: "Puss in Boots: The Last Wish",
  //   video: false,
  //   vote_average: 8.6,
  //   vote_count: 2366,
  // };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const backdropURL = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

  getMovieURL(movie?.id).then((response) => setUrl(response));

  return (
    <div className="">
      <div
        className="absolute z-40 bottom-16 ml-5 p-4 h-"
        style={{ ...blurEffect }}>
        <h3 className="text-4xl font-bold">{movie?.title}</h3>
        <div className="">
          <p className="w-[100%] text-base">{truncate(movie?.overview, 130)}</p>
        </div>
        <div className="flex items-center justify-start gap-x-3">
          <img
            src="./src/assets/imdb.png"
            alt=""
          />
          <h5 className="">{movie.vote_average}/10</h5>
        </div>
      </div>
      <a
        href={url}
        target="_blank">
        <img
          src={backdropURL}
          style={{ height: "500px", width: "100%", objectFit: "cover", objectPosition: "center" }}
          alt=""
        />
      </a>
    </div>
  );
};

export default ImageSliderCard;
