import React, { useState } from "react";
import { getMovieURL } from "../../utils/getMovieURL";

const ImageSliderCard = ({ movie }) => {
  const [url, setUrl] = useState("");

  const blurEffect = {
    color: "#fff",
    backgroundColor: " rgba(255,255,255,0.06)",
    backdropFilter: "blur(20px)",
    width: "400px",
    borderRadius: "20px",
  };

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
            src="./imdb.png"
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
